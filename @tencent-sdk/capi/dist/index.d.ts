import * as rp from 'request-promise-native';
export { tencentSign, tencentSignV1 } from './utils';
export interface CapiOptions {
    debug?: boolean;
    host?: string;
    baseHost?: string;
    path?: string;
    method?: string;
    protocol?: string;
    ServiceType: string;
    Region: string;
    SecretId: string;
    SecretKey: string;
    Token?: string;
    SignatureMethod?: string;
}
export interface RequestData {
    Action: string;
    RequestClient?: string;
    Version: string;
    [propName: string]: any;
}
export interface RequestOptions {
    debug?: boolean;
    host?: string;
    baseHost?: string;
    path?: string;
    method?: string;
    protocol?: string;
    ServiceType?: string;
    Region?: string;
    SecretId?: string;
    SecretKey?: string;
    maxKeys?: number;
    SignatureMethod?: string;
    timeout?: number;
}
export interface CapiInstance {
    request: (data: RequestData, opts?: RequestOptions, isV3?: boolean) => Promise<any>;
}
export declare class Capi implements CapiInstance {
    options: CapiOptions;
    defaultOptions: RequestOptions;
    constructor(options: CapiOptions);
    request(data: RequestData, opts?: RequestOptions, isV3?: boolean): rp.RequestPromise<any>;
}
//# sourceMappingURL=index.d.ts.map