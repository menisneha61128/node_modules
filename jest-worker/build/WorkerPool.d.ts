/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BaseWorkerPool from './base/BaseWorkerPool';
import { ChildMessage, OnEnd, OnStart, WorkerInterface, WorkerOptions, WorkerPoolInterface } from './types';
declare class WorkerPool extends BaseWorkerPool implements WorkerPoolInterface {
    send(workerId: number, request: ChildMessage, onStart: OnStart, onEnd: OnEnd): void;
    createWorker(workerOptions: WorkerOptions): WorkerInterface;
}
export default WorkerPool;
//# sourceMappingURL=WorkerPool.d.ts.map