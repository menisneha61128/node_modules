/// <reference types="node" />
import { CapiOptions } from './index';
export interface Payload {
    Region?: string;
    SecretId?: string;
    Timestamp?: number | string;
    Nonce?: number;
    [propName: string]: any;
}
export interface HostParams {
    ServiceType: string;
    Region: string;
    host: string | undefined;
    baseHost: string | undefined;
    path?: string;
    protocol?: string;
}
export interface TencentSignResult {
    url: string;
    payload: Payload;
    Host: string;
    Authorization: string;
    Timestamp: number | string;
}
export interface TencentSignResultV1 {
    url: string;
    method: string;
    payload: Payload;
}
export declare function logger(topic: string, content: string): void;
export declare function getHost({ host, ServiceType, Region, baseHost }: HostParams, isV1?: boolean): string;
export declare function getUnixTime(date: Date): number;
export declare function getDate(date: Date): string;
export declare function getUrl(opts: HostParams, isV1?: boolean): string;
export declare function sign(str: string, secretKey: Buffer, algorithm?: string): Buffer;
/**
 * is array
 * @param obj object
 */
export declare function isArray(obj: any): boolean;
/**
 * is object
 * @param obj object
 */
export declare function isObject(obj: any): boolean;
/**
 * iterate object or array
 * @param obj object or array
 * @param iterator iterator function
 */
export declare function _forEach(obj: object | any[], iterator: (value: any, index: number | string, array: any) => void): void;
/**
 * flatter request parameter
 * @param obj target object or array
 */
export declare function flatten(obj: {
    [propName: string]: any;
}): {
    [propName: string]: any;
};
/**
 * generate tencent cloud sign result
 *
 * @param {Payload} payload
 * @param {CapiOptions} options
 * @returns {TencentSignResult}
 */
export declare function tencentSign(payload: Payload, options: CapiOptions): TencentSignResult;
/**
 * version1: generate tencent cloud sign result
 *
 * @param {Payload} payload
 * @param {CapiOptions} options
 * @returns {TencentSignResultV1}
 */
export declare function tencentSignV1(payload: Payload, options: CapiOptions): TencentSignResultV1;
//# sourceMappingURL=utils.d.ts.map