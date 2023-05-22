import { Observable, Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class BnNgIdleService {
    private idle$;
    private timer$;
    private timeOutMilliSeconds;
    private idleSubscription;
    expired$: Subject<boolean>;
    constructor();
    startWatching(timeOutSeconds: any): Observable<any>;
    private startTimer;
    resetTimer(): void;
    stopTimer(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BnNgIdleService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BnNgIdleService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm4tbmctaWRsZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImJuLW5nLWlkbGUuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCbk5nSWRsZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBpZGxlJDtcclxuICAgIHByaXZhdGUgdGltZXIkO1xyXG4gICAgcHJpdmF0ZSB0aW1lT3V0TWlsbGlTZWNvbmRzO1xyXG4gICAgcHJpdmF0ZSBpZGxlU3Vic2NyaXB0aW9uO1xyXG4gICAgZXhwaXJlZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgc3RhcnRXYXRjaGluZyh0aW1lT3V0U2Vjb25kczogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBzdGFydFRpbWVyO1xyXG4gICAgcmVzZXRUaW1lcigpOiB2b2lkO1xyXG4gICAgc3RvcFRpbWVyKCk6IHZvaWQ7XHJcbn1cclxuIl19