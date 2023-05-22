/// <reference types="jasmine" />
import { Configuration } from "./configuration";
import { CustomReporterResult } from "./custom-reporter-result";
import { ExecutionMetrics } from "./execution-metrics";
import SuiteInfo = jasmine.SuiteInfo;
export declare class ExecutionDisplay {
    private configuration;
    private static initProcessors(configuration);
    private static hasCustomDisplaySpecStarted(processors);
    private indent;
    private currentIndent;
    private suiteHierarchy;
    private suiteHierarchyDisplayed;
    private successfulSpecs;
    private failedSpecs;
    private pendingSpecs;
    private lastWasNewLine;
    private hasCustomDisplaySpecStarted;
    private displayProcessors;
    constructor(configuration: Configuration);
    jasmineStarted(suiteInfo: SuiteInfo): void;
    summary(metrics: ExecutionMetrics): void;
    specStarted(result: CustomReporterResult): void;
    successful(result: CustomReporterResult): void;
    failed(result: CustomReporterResult): void;
    pending(result: CustomReporterResult): void;
    suiteStarted(result: CustomReporterResult): void;
    suiteDone(): void;
    private successesSummary();
    private successfulSummary(spec, index);
    private failuresSummary();
    private failedSummary(spec, index);
    private pendingsSummary();
    private pendingSummary(spec, index);
    private ensureSuiteDisplayed();
    private displaySuite(suite);
    private process(object, processFunction);
    private computeSuiteIndent();
    private log(stuff);
    private newLine();
    private resetIndent();
    private increaseIndent();
    private decreaseIndent();
}
