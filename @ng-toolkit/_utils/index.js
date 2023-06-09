"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const dependencies_1 = require("@schematics/angular/utility/dependencies");
const change_1 = require("@schematics/angular/utility/change");
const test_1 = require("@schematics/angular/utility/test");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const outdent_1 = require("outdent");
const js_1 = require("@bugsnag/js");
const jsyaml = require('js-yaml');
function createGitIgnore(dirName) {
    return (tree) => {
        createOrOverwriteFile(tree, `./${dirName}/.gitignore`, outdent_1.default `
            /node_modules/
            /dist/
            /lib/
            /yarn.lock
            *.log
            .idea
            .serverless
            *.iml
            *.js.map
            *.d.ts
            .DS_Store
            dll
            .awcache
            /src/styles/main.css
            /firebug-lite
            firebug-lite.tar.tgz
            /coverage
        `);
        return tree;
    };
}
exports.createGitIgnore = createGitIgnore;
function updateGitIgnore(options, entry) {
    return (tree) => {
        const content = test_1.getFileContent(tree, `${options.directory}/.gitignore`);
        tree.overwrite(`${options.directory}/.gitignore`, `${content}\n${entry}`);
        return tree;
    };
}
exports.updateGitIgnore = updateGitIgnore;
function createOrOverwriteFile(tree, filePath, fileContent) {
    if (!tree.exists(filePath)) {
        tree.create(filePath, '');
    }
    tree.overwrite(filePath, fileContent);
}
exports.createOrOverwriteFile = createOrOverwriteFile;
function addDependencyToPackageJson(tree, options, dependency) {
    const packageJsonSource = JSON.parse(test_1.getFileContent(tree, `${options.directory}/package.json`));
    packageJsonSource[dependency.type][dependency.name] = dependency.version;
    tree.overwrite(`${options.directory}/package.json`, JSON.stringify(packageJsonSource, null, 2));
}
exports.addDependencyToPackageJson = addDependencyToPackageJson;
function addOrReplaceScriptInPackageJson(options, name, script) {
    return (tree) => {
        addOrReplaceScriptInPackageJson2(tree, options, name, script);
        return tree;
    };
}
exports.addOrReplaceScriptInPackageJson = addOrReplaceScriptInPackageJson;
function addEntryToEnvironment(tree, filePath, entryName, entryValue) {
    const sourceText = test_1.getFileContent(tree, filePath);
    const changePos = sourceText.lastIndexOf("};") - 1;
    const changeRecorder = tree.beginUpdate(filePath);
    if (typeof entryValue === 'string') {
        changeRecorder.insertLeft(changePos, `,\n\t${entryName}: '${entryValue}'`);
    }
    else {
        changeRecorder.insertLeft(changePos, `,\n\t${entryName}: ${entryValue}`);
    }
    tree.commitUpdate(changeRecorder);
}
exports.addEntryToEnvironment = addEntryToEnvironment;
function addImportLine(tree, filePath, importLine) {
    if (test_1.getFileContent(tree, filePath).indexOf(importLine) == -1) {
        const changeRecorder = tree.beginUpdate(filePath);
        changeRecorder.insertLeft(0, importLine + '\n');
        tree.commitUpdate(changeRecorder);
    }
}
exports.addImportLine = addImportLine;
function getTsSourceFile(tree, path) {
    const buffer = tree.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not read file (${path}).`);
    }
    const content = buffer.toString();
    const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
    return source;
}
function addImportStatement(tree, filePath, type, file) {
    let source = getTsSourceFile(tree, filePath);
    const importChange = ast_utils_1.insertImport(source, filePath, type, file);
    if (!(importChange instanceof change_1.NoopChange)) {
        const recorder = tree.beginUpdate(filePath);
        recorder.insertLeft(importChange.pos, importChange.toAdd);
        tree.commitUpdate(recorder);
    }
}
exports.addImportStatement = addImportStatement;
function implementInterface(tree, filePath, interfaceName, fileName) {
    let results = test_1.getFileContent(tree, filePath).match(new RegExp("(.*class)\\s*(.*?)\\s*(:?implements\\s*(.*)|){"));
    if (results) {
        const oldClassDeclaration = results[0];
        let interfaces = results[5] || '';
        if (interfaces.indexOf(interfaceName) == -1) {
            addImportStatement(tree, filePath, interfaceName, fileName);
            if (interfaces.length > 0) {
                interfaces += ',';
            }
            interfaces += interfaceName;
            const newClassDeclaration = `${results[1]} ${results[2]} implements ${interfaces} {`;
            tree.overwrite(filePath, test_1.getFileContent(tree, filePath).replace(oldClassDeclaration, newClassDeclaration));
        }
    }
}
exports.implementInterface = implementInterface;
function addOpenCollective(options) {
    return (tree) => {
        const packageJsonSource = JSON.parse(test_1.getFileContent(tree, `${options.directory}/package.json`));
        packageJsonSource['collective'] = {
            type: 'opencollective',
            url: 'https://opencollective.com/ng-toolkit'
        };
        if (packageJsonSource.scripts['postinstall'] && packageJsonSource.scripts['postinstall'].indexOf('opencollective') == -1) {
            packageJsonSource.scripts['postinstall'] += ' && opencollective postinstall';
        }
        else {
            packageJsonSource.scripts['postinstall'] = 'opencollective postinstall';
        }
        addDependencyToPackageJson(tree, options, {
            type: dependencies_1.NodeDependencyType.Dev,
            name: 'opencollective',
            version: '^1.0.3'
        });
        return tree;
    };
}
exports.addOpenCollective = addOpenCollective;
function updateMethod(tree, filePath, name, newBody) {
    let fileContent = test_1.getFileContent(tree, filePath);
    let oldSignature = getMethodSignature(tree, filePath, name);
    if (oldSignature) {
        const oldBody = getMethodBody(tree, filePath, name) || '';
        let newMethodContent = oldSignature + newBody;
        let oldMethod = oldSignature + oldBody;
        tree.overwrite(filePath, fileContent.replace(oldMethod, newMethodContent));
    }
    else {
        throw new NgToolkitException(`Method ${name} not found in ${filePath}`, { fileContent: fileContent });
    }
}
exports.updateMethod = updateMethod;
function getMethodSignature(tree, filePath, name) {
    let fileContent = test_1.getFileContent(tree, filePath);
    let results = fileContent.match(new RegExp("(?:public|private|).*" + name + ".*?\\(([\\s\\S]*?\\))"));
    if (results) {
        fileContent = fileContent.substr(results.index);
        let lines = fileContent.split('\n');
        let endCut = 0;
        let openingBraces = 0;
        for (let line of lines) {
            endCut += line.length + 1;
            openingBraces += (line.match(/{/g) || []).length;
            if (openingBraces > 0) {
                break;
            }
        }
        return fileContent.substr(0, endCut);
    }
    else {
        return null;
    }
}
exports.getMethodSignature = getMethodSignature;
function getMethodBodyEdges(tree, filePath, name) {
    let fileContent = test_1.getFileContent(tree, filePath);
    let sourceFile = ts.createSourceFile('temp.ts', fileContent, ts.ScriptTarget.Latest);
    let toReturn = null;
    sourceFile.forEachChild(node => {
        if (ts.isClassDeclaration(node)) {
            let methodFound = false;
            node.members.forEach(node => {
                if (((name === 'constructor' && ts.isConstructorDeclaration(node)) || ts.isMethodDeclaration(node)) && !methodFound) {
                    methodFound = true;
                    if (node.body) {
                        toReturn = { start: fileContent.indexOf('{', node.body.pos) + 1, end: node.body.end - 1 };
                    }
                }
            });
        }
    });
    return toReturn;
}
exports.getMethodBodyEdges = getMethodBodyEdges;
function getMethod(tree, filePath, name) {
    let fileContent = test_1.getFileContent(tree, filePath);
    let results = fileContent.match(new RegExp("(?:public|private|).*" + name + ".*?\\(([\\s\\S]*?\\))"));
    if (results) {
        fileContent = fileContent.substr(results.index);
        let lines = fileContent.split('\n');
        let methodLength = 0;
        let openingBraces = 0;
        let closingBraces = 0;
        let openBraces = 0;
        for (let line of lines) {
            methodLength += line.length + 1;
            openingBraces += (line.match(/{/g) || []).length;
            closingBraces += (line.match(/}/g) || []).length;
            openBraces = openingBraces - closingBraces;
            if (openBraces == 0 && openingBraces > 0) {
                break;
            }
        }
        let methodContent = fileContent.substr(0, methodLength);
        return methodContent;
    }
    else {
        return null;
    }
}
exports.getMethod = getMethod;
function getMethodBody(tree, filePath, name) {
    let fileContent = test_1.getFileContent(tree, filePath);
    let results = fileContent.match(new RegExp("(?:public|private|).*" + name + ".*?\\(((\\s.*?)*)\\).*\\s*{"));
    if (results) {
        fileContent = fileContent.substr(results.index);
        let lines = fileContent.split('\n');
        let startCut = 0;
        let methodLength = 0;
        let openingBraces = 0;
        let closingBraces = 0;
        let openBraces = 0;
        for (let line of lines) {
            if (openBraces == 0) {
                startCut += line.length + 1;
            }
            else {
                methodLength += line.length + 1;
            }
            openingBraces += (line.match(/{/g) || []).length;
            closingBraces += (line.match(/}/g) || []).length;
            openBraces = openingBraces - closingBraces;
            if (openBraces == 0 && openingBraces > 0) {
                break;
            }
        }
        let methodContent = fileContent.substr(startCut, methodLength - 2);
        return methodContent;
    }
    else {
        return null;
    }
}
exports.getMethodBody = getMethodBody;
function addMethod(tree, filePath, body) {
    const sourceText = test_1.getFileContent(tree, filePath);
    let changePos;
    const changeRecorder = tree.beginUpdate(filePath);
    if (body.indexOf('constructor') >= 0 || body.indexOf('public') >= 0) {
        let match = sourceText.match(/(?:export|) class.*?{[\s\S]*?((?:constructor|public|private|)[\w\s]*?\()/);
        if (match) {
            changePos = (match['index'] || 0) + match[0].length - match[1].length;
        }
        else {
            changePos = sourceText.lastIndexOf("}") - 1;
        }
    }
    else {
        changePos = sourceText.lastIndexOf("}") - 1;
    }
    changeRecorder.insertLeft(changePos, `\n${body}\n`);
    tree.commitUpdate(changeRecorder);
}
exports.addMethod = addMethod;
function addParamterToMethod(tree, filePath, name, parameterDeclaration) {
    let method = getMethod(tree, filePath, name);
    const fileContent = test_1.getFileContent(tree, filePath);
    if (method) {
        let results = method.match(new RegExp("(?:public|private|\\s).*" + name + "[\\s\\S]*?(\([\\s\\S]*?\)[\\s\\S]*?{)"));
        if (results) {
            let oldParams = results[1];
            oldParams = oldParams.substring(1, oldParams.lastIndexOf(")"));
            if (oldParams.indexOf(parameterDeclaration) > 0) {
                return;
            }
            let newParams = parameterDeclaration + ", " + oldParams;
            let newMethod = method.replace(oldParams, newParams);
            tree.overwrite(filePath, fileContent.replace(method, newMethod));
        }
    }
}
exports.addParamterToMethod = addParamterToMethod;
function getServerDistFolder(tree, options) {
    const cliConfig = JSON.parse(test_1.getFileContent(tree, `${options.directory}/angular.json`));
    const project = cliConfig.projects[options.clientProject].architect;
    for (let property in project) {
        if (project.hasOwnProperty(property) && project[property].builder === '@angular-devkit/build-angular:server') {
            return project[property].options.outputPath;
        }
    }
    return '';
}
exports.getServerDistFolder = getServerDistFolder;
function updateProject(tree, options) {
    const cliConfig = JSON.parse(test_1.getFileContent(tree, `${options.directory}/angular.json`));
    const project = cliConfig.projects[options.clientProject].architect;
    for (let property in project) {
        if (project.hasOwnProperty(property) && project[property].builder === '@angular-devkit/build-angular:browser') {
            console.log(`\u001B[33mINFO: \u001b[0mProject property is set to '${options.clientProject}'.`);
            return;
        }
    }
    if (project && project.defaultProject) {
        options.clientProject = project.defaultProject;
        console.log(`\u001B[33mINFO: \u001b[0mProject property is set to '${options.clientProject}'.`);
        return;
    }
    // trying with regex - will take first project found with the browser builder
    const angularFileContent = test_1.getFileContent(tree, `${options.directory}/angular.json`);
    const results = /"projects":\s*{[\s\S]*?"(.*)"[\s\S]*@angular-devkit\/build-angular:browser/.exec(angularFileContent);
    if (results) {
        options.clientProject = results[1];
        console.log(`\u001B[33mINFO: \u001b[0mProject property is set to '${options.clientProject}'.`);
    }
}
exports.updateProject = updateProject;
function getBrowserDistFolder(tree, options) {
    const cliConfig = JSON.parse(test_1.getFileContent(tree, `${options.directory}/angular.json`));
    const project = cliConfig.projects[options.clientProject].architect;
    for (let property in project) {
        if (project.hasOwnProperty(property) && project[property].builder === '@angular-devkit/build-angular:browser') {
            return project[property].options.outputPath;
        }
    }
    // Not found for the passed project. Checks the default one
    throw new NgToolkitException('Browser build not found (lack of entry with build-angular:browser builder) in angular.json', { fileContent: cliConfig });
}
exports.getBrowserDistFolder = getBrowserDistFolder;
function getDistFolder(tree, options) {
    let toReturn;
    if (isUniversal(tree, options)) {
        let array = [getServerDistFolder(tree, options), getBrowserDistFolder(tree, options)];
        let A = array.concat().sort(), a1 = A[0], a2 = A[A.length - 1], L = a1.length, i = 0;
        while (i < L && a1.charAt(i) === a2.charAt(i))
            i++;
        toReturn = a1.substring(0, i - 1);
    }
    else {
        toReturn = getBrowserDistFolder(tree, options);
        if (toReturn.lastIndexOf('/') >= 0) {
            toReturn = toReturn.substr(0, toReturn.lastIndexOf('/'));
        }
    }
    return toReturn;
}
exports.getDistFolder = getDistFolder;
function isUniversal(tree, options) {
    const cliConfig = JSON.parse(test_1.getFileContent(tree, `${options.directory}/angular.json`));
    const project = cliConfig.projects[options.clientProject].architect;
    for (let property in project) {
        if (project.hasOwnProperty(property) && project[property].builder === '@angular-devkit/build-angular:server') {
            return true;
        }
    }
    return false;
}
exports.isUniversal = isUniversal;
function getMainServerFilePath(tree, options) {
    const cliConfig = JSON.parse(test_1.getFileContent(tree, `${options.directory}/angular.json`));
    const project = cliConfig.projects[options.clientProject].architect;
    for (let property in project) {
        if (project.hasOwnProperty(property) && project[property].builder === '@angular-devkit/build-angular:server') {
            return `${project[property].options.main}`;
        }
    }
    return undefined;
}
exports.getMainServerFilePath = getMainServerFilePath;
function getMainFilePath(tree, options) {
    const cliConfig = JSON.parse(test_1.getFileContent(tree, `${options.directory}/angular.json`));
    const project = cliConfig.projects[options.clientProject].architect;
    for (let property in project) {
        if (project.hasOwnProperty(property) && project[property].builder === '@angular-devkit/build-angular:browser') {
            return `${project[property].options.main}`;
        }
    }
    throw new NgToolkitException('Main file could not be found (lack of entry with build-angular:browser builder) in angular.json', { workspace: cliConfig });
}
exports.getMainFilePath = getMainFilePath;
function getAppEntryModule(tree, options) {
    const mainFilePath = getMainFilePath(tree, options);
    const entryFileSource = test_1.getFileContent(tree, `${options.directory}/${mainFilePath}`);
    let results = entryFileSource.match(/bootstrapModule\((.*?)\)/);
    if (!results) {
        throw new NgToolkitException(`Entry module not found in ${options.directory}/${mainFilePath}.`, { fileContent: entryFileSource });
    }
    const entryModule = results[1];
    results = entryFileSource.match(new RegExp(`import\\s*{\\s*.*${entryModule}.*from\\s*(?:'|")(.*)(?:'|")`));
    if (!results) {
        throw new NgToolkitException(`Entry module import not found in ${options.directory}/${mainFilePath}.`, { fileContent: entryFileSource });
    }
    const appModuleFilePath = `${options.directory}/${mainFilePath.substr(0, mainFilePath.lastIndexOf('/'))}/${results[1]}.ts`;
    return { moduleName: entryModule, filePath: appModuleFilePath };
}
exports.getAppEntryModule = getAppEntryModule;
function normalizePath(path) {
    return path.replace(/(([A-z0-9_-]*\/\.\.)|(\/\.))/g, '');
}
exports.normalizePath = normalizePath;
function getRelativePath(from, to) {
    from = normalizePath(from);
    to = normalizePath(to);
    let array = [from, to];
    let A = array.concat().sort(), a1 = A[0], a2 = A[A.length - 1], L = a1.length, i = 0;
    while (i < L && a1.charAt(i) === a2.charAt(i))
        i++;
    let commonBeggining = a1.substring(0, i);
    commonBeggining = commonBeggining.substring(0, commonBeggining.lastIndexOf('/') + 1);
    let navigateFromDirectory = from.replace(commonBeggining, '').replace(/[A-Za-z0-9_-]*\..*/, '').replace(/[A-Za-z0-9_-]*\//, '../');
    let toReturn = `${navigateFromDirectory}${to.replace(commonBeggining, '')}`;
    toReturn = toReturn.substring(0, toReturn.lastIndexOf('.'));
    toReturn = toReturn.startsWith('.') ? toReturn : `./${toReturn}`;
    return toReturn;
}
exports.getRelativePath = getRelativePath;
function getDecoratorSettings(tree, filePath, decorator) {
    const fileContent = test_1.getFileContent(tree, filePath);
    let sourceFile = ts.createSourceFile('temp.ts', fileContent, ts.ScriptTarget.Latest);
    let toReturn;
    sourceFile.getChildren().forEach(node => {
        node.getChildren().filter(node => ts.isClassDeclaration(node)).forEach((node) => {
            if (node.decorators) {
                node.forEachChild(node => node.forEachChild(decoratorNode => {
                    if (decoratorNode.kind === ts.SyntaxKind.CallExpression) {
                        decoratorNode.forEachChild(node => {
                            if (ts.isIdentifier(node) && node.escapedText === decorator) {
                                toReturn = decoratorNode;
                            }
                        });
                    }
                }));
            }
        });
    });
    if (toReturn) {
        return toReturn;
    }
    throw new NgToolkitException(`Can't find decorator ${decorator} in ${filePath}`, { fileContent: fileContent });
}
exports.getDecoratorSettings = getDecoratorSettings;
function getNgToolkitInfo(tree, options) {
    if (!tree.exists(`${options.directory}/ng-toolkit.json`)) {
        tree.create(`${options.directory}/ng-toolkit.json`, `{}`);
    }
    return JSON.parse(test_1.getFileContent(tree, `${options.directory}/ng-toolkit.json`));
}
exports.getNgToolkitInfo = getNgToolkitInfo;
function updateNgToolkitInfo(tree, newSettings, options) {
    tree.overwrite(`${options.directory}/ng-toolkit.json`, JSON.stringify(newSettings, null, 2));
}
exports.updateNgToolkitInfo = updateNgToolkitInfo;
function applyAndLog(rule, bugsnagClient) {
    return (tree, context) => {
        return rule(tree, context)
            .pipe(operators_1.catchError((error) => {
            let subject = new rxjs_1.Subject();
            console.log(`\u001B[31mERROR MESSAGE: \u001b[0m${error.message}`);
            console.log(`\u001B[31mERROR STACKTRACE: \u001b[0m${error.stack}`);
            console.log(`\u001B[31mERROR TIP: \u001b[0mIf you think that this error shouldn't occur, please fill up bug report here: \u001B[32mhttps://github.com/maciejtreder/ng-toolkit/issues/new`);
            bugsnagClient.notify(error, {}, (error, report) => {
                if (!error && report.errorMessage) {
                    console.log(`\u001B[33mINFO: \u001b[0mstacktrace has been sent to tracking system.`);
                }
                subject.next(schematics_1.Tree.empty());
                subject.complete();
            });
            return subject;
        }));
    };
}
exports.applyAndLog = applyAndLog;
function checkCLIcompatibility(tree, options) {
    if (!tree.exists(`${options.directory}/angular.json`)) {
        throw new NgToolkitException('@ng-toolkit works only with CLI version 6 or higher. Update your Angular CLI and/or project.');
    }
    return true;
}
exports.checkCLIcompatibility = checkCLIcompatibility;
function addToNgModule(tree, filePath, literal, entry) {
    let source = getTsSourceFile(tree, filePath);
    const changes = ast_utils_1.addSymbolToNgModuleMetadata(source, filePath, literal, entry);
    if (changes) {
        const recorder = tree.beginUpdate(filePath);
        changes.forEach((change) => {
            recorder.insertRight(change.pos, change.toAdd);
        });
        tree.commitUpdate(recorder);
    }
}
exports.addToNgModule = addToNgModule;
function removeFromNgModule(tree, filePath, literal, entry) {
    let fileContent = test_1.getFileContent(tree, filePath);
    const ngModuleDecorator = getDecoratorSettings(tree, filePath, 'NgModule');
    let literalNode = getLiteral(ngModuleDecorator, literal);
    if (!literalNode) {
        throw new schematics_1.SchematicsException(`Literal: ${literal} not found in ${filePath}`);
    }
    literalNode.forEachChild(node => {
        if (ts.isArrayLiteralExpression(node)) {
            let actualLiteral;
            let newLiteral = '';
            actualLiteral = fileContent.substr(literalNode.pos, literalNode.end - literalNode.pos + 1);
            if (entry) {
                newLiteral = actualLiteral.replace(new RegExp(`${entry.replace(/\(/g, '\\(').replace(/\)/g, '\\)')}([\s]*?,|)`), '');
            }
            else {
                newLiteral = '';
            }
            const newFileContent = fileContent.replace(actualLiteral, newLiteral);
            createOrOverwriteFile(tree, filePath, newFileContent);
        }
    });
}
exports.removeFromNgModule = removeFromNgModule;
function getLiteral(inputNode, literal) {
    let toReturn = null;
    inputNode.forEachChild((node) => {
        if (ts.isObjectLiteralExpression(node)) {
            node.forEachChild(parentNode => {
                if (ts.isPropertyAssignment(parentNode)) {
                    parentNode.forEachChild(node => {
                        if (ts.isIdentifier(node) && node.escapedText === literal) {
                            toReturn = parentNode;
                        }
                    });
                }
            });
        }
    });
    if (!toReturn) {
        throw new schematics_1.SchematicsException(`Literal: ${literal} not found!`);
    }
    return toReturn;
}
function findStatements(tree, node, filePath, subject, replacement, toReplace) {
    let fileContent = test_1.getFileContent(tree, filePath);
    node.forEachChild(node => {
        if (ts.isIdentifier(node)) {
            let statement = fileContent.substr(node.pos, node.end - node.pos);
            let index = statement.indexOf(subject);
            if (index >= 0) {
                toReplace.push({ key: replacement, start: node.pos + index, end: node.end });
            }
        }
        else {
            findStatements(tree, node, filePath, subject, replacement, toReplace);
        }
    });
}
exports.findStatements = findStatements;
function updateCode(tree, filePath, varName) {
    let fileContent = test_1.getFileContent(tree, filePath);
    let sourceFile = ts.createSourceFile('temp.ts', fileContent, ts.ScriptTarget.Latest);
    sourceFile.forEachChild(node => {
        if (ts.isClassDeclaration(node)) {
            let replacementTable = [];
            node.members.forEach(node => {
                if (ts.isMethodDeclaration(node)) {
                    node.body.statements.forEach(statement => {
                        findStatements(tree, statement, filePath, varName, `this.${varName}`, replacementTable);
                    });
                }
            });
            replacementTable.reverse().forEach(element => {
                fileContent = fileContent.substr(0, element.start) + element.key + fileContent.substr(element.end);
            });
            createOrOverwriteFile(tree, filePath, fileContent);
        }
    });
}
exports.updateCode = updateCode;
function updateBoostrapFirebug(tree, options) {
    let mainFilePath = `${getMainFilePath(tree, options)}`;
    let mainFileContent = test_1.getFileContent(tree, mainFilePath);
    let sourceFile = ts.createSourceFile('temp.ts', mainFileContent, ts.ScriptTarget.Latest);
    sourceFile.forEachChild(node => {
        if (ts.isExpressionStatement(node)) {
            let expression = mainFileContent.substring(node.pos, node.end);
            if (expression.indexOf('bootstrapModule') > -1) {
                //should be wrapped!
                mainFileContent = mainFileContent.substr(0, node.pos) + `\nfireBug().then(() => { \n ${expression} \n});` + mainFileContent.substr(node.end);
                createOrOverwriteFile(tree, mainFilePath, mainFileContent);
                addImportLine(tree, mainFilePath, `import { fireBug } from './bootstrapScripts/firebug';`);
            }
        }
    });
}
exports.updateBoostrapFirebug = updateBoostrapFirebug;
function getBootStrapComponent(tree, modulePath) {
    const moduleSource = test_1.getFileContent(tree, modulePath);
    let components = [];
    let toReturn = [];
    let decorator = getDecoratorSettings(tree, modulePath, 'NgModule');
    let bootstrapNode = getLiteral(decorator, 'bootstrap');
    if (!bootstrapNode) {
        throw new NgToolkitException(`Bootstrap not found in ${modulePath}.`, { fileContent: moduleSource });
    }
    bootstrapNode.forEachChild(node => {
        if (ts.isArrayLiteralExpression(node)) {
            node.elements.forEach((elem) => {
                components.push(elem.escapedText.toString());
            });
        }
    });
    let sourceFile = ts.createSourceFile('temp.ts', moduleSource, ts.ScriptTarget.Latest);
    sourceFile.forEachChild(node => {
        if (ts.isImportDeclaration(node) && node.importClause && node.importClause.namedBindings) {
            let imports = moduleSource.substr(node.importClause.namedBindings.pos, node.importClause.namedBindings.end - node.importClause.namedBindings.pos);
            for (let component of components) {
                if (imports.indexOf(component) > -1 && ts.isStringLiteral(node.moduleSpecifier)) {
                    let componentPath = normalizePath(`${modulePath.substring(0, modulePath.lastIndexOf('/'))}/${node.moduleSpecifier.text}.ts`);
                    let componentDecorator = getDecoratorSettings(tree, componentPath, 'Component');
                    let appId;
                    componentDecorator.forEachChild(node => node.forEachChild(node => {
                        if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name) && node.name.escapedText === 'selector') {
                            appId = node.initializer.text;
                        }
                    }));
                    let path = `${modulePath.substring(0, modulePath.lastIndexOf('/'))}/${node.moduleSpecifier.text}.ts`;
                    path = normalizePath(path);
                    toReturn.push({ component: component, appId: appId, filePath: path });
                    break;
                }
            }
        }
    });
    return toReturn;
}
exports.getBootStrapComponent = getBootStrapComponent;
class NgToolkitException extends schematics_1.SchematicsException {
    constructor(message, additionalData) {
        super(message);
        const bugsnagClient = js_1.default('0b326fddc255310e516875c9874fed91');
        bugsnagClient.config.beforeSend = (report) => {
            report.metaData = { subsystem: additionalData };
        };
    }
}
exports.NgToolkitException = NgToolkitException;
function addDependencyInjection(tree, filePath, varName, type, importFrom, token) {
    if (token) {
        addImportStatement(tree, filePath, token, importFrom);
        addImportStatement(tree, filePath, 'Inject', '@angular/core');
    }
    else {
        addImportStatement(tree, filePath, type, importFrom);
    }
    let fileContent = test_1.getFileContent(tree, filePath);
    let sourceFile = ts.createSourceFile('temp.ts', fileContent, ts.ScriptTarget.Latest);
    let paramName;
    sourceFile.forEachChild(node => {
        if (ts.isClassDeclaration(node)) {
            let methodFound = false;
            let constructorFound = false;
            let firstMethodPosition = node.end - 1;
            let toAdd = `private ${varName}: ${type}`;
            if (token) {
                toAdd = `@Inject(${token}) ${toAdd}`;
            }
            node.members.forEach(node => {
                if (ts.isMethodDeclaration(node) && !methodFound) {
                    methodFound = true;
                    firstMethodPosition = node.pos;
                }
                if (ts.isConstructorDeclaration(node)) {
                    let regex;
                    if (token) {
                        regex = `@Inject\\(\\s*?${token}\\s*?\\)\\s*?(?:private|public)(.*)?:`;
                    }
                    else {
                        regex = `(?:private|public)(.*):\\s?${type}`;
                    }
                    const compiledRegex = new RegExp(regex);
                    node.parameters.forEach(param => {
                        let parameterContent = fileContent.substring(param.pos, param.end);
                        let match = parameterContent.match(compiledRegex);
                        if (match) {
                            paramName = match[1].trim();
                        }
                    });
                    constructorFound = true;
                }
            });
            if (!paramName) {
                paramName = varName;
            }
            if (constructorFound) {
                fileContent = fileContent.replace('constructor(', `constructor(${toAdd}, `);
            }
            else {
                fileContent = fileContent.substr(0, firstMethodPosition) + `\n constructor(${toAdd}) {}\n` + fileContent.substr(firstMethodPosition);
            }
        }
    });
    createOrOverwriteFile(tree, filePath, fileContent);
    return paramName ? paramName : '';
}
exports.addDependencyInjection = addDependencyInjection;
function addOrReplaceScriptInPackageJson2(tree, options, name, script) {
    const packageJsonSource = JSON.parse(test_1.getFileContent(tree, `${options.directory}/package.json`));
    packageJsonSource.scripts[name] = script;
    tree.overwrite(`${options.directory}/package.json`, JSON.stringify(packageJsonSource, null, 2));
}
exports.addOrReplaceScriptInPackageJson2 = addOrReplaceScriptInPackageJson2;
function getAngularVersion(tree, options) {
    const packageJsonSource = JSON.parse(test_1.getFileContent(tree, `${options.directory}/package.json`));
    return packageJsonSource.dependencies['@angular/core'];
}
exports.getAngularVersion = getAngularVersion;
function parseYML2JS(tree, filePath) {
    const fileContent = test_1.getFileContent(tree, filePath);
    try {
        const data = jsyaml.safeLoad(fileContent);
        return data;
    }
    catch (error) {
        throw new NgToolkitException(`Unable to parse ${filePath} file into JS Object.`, error);
    }
}
exports.parseYML2JS = parseYML2JS;
function parseJS2YML(tree, data, outputPath) {
    try {
        const fileContent = jsyaml.safeDump(data);
        createOrOverwriteFile(tree, outputPath, fileContent);
    }
    catch (error) {
        throw new NgToolkitException(`Unable to write parsed JS Object into ${outputPath} file.`, error);
    }
}
exports.parseJS2YML = parseJS2YML;
//# sourceMappingURL=index.js.map