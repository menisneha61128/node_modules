import { OnDestroy, OnChanges, OnInit, EventEmitter, ElementRef, SimpleChanges, DoCheck } from '@angular/core';
import * as chartJs from 'chart.js';
import { Color } from './color';
import { ThemeService } from './theme.service';
import * as ɵngcc0 from '@angular/core';
export declare type SingleDataSet = (number[] | chartJs.ChartPoint[]);
export declare type MultiDataSet = (number[] | chartJs.ChartPoint[])[];
export declare type SingleOrMultiDataSet = SingleDataSet | MultiDataSet;
export declare type PluginServiceGlobalRegistrationAndOptions = chartJs.PluginServiceGlobalRegistration & chartJs.PluginServiceRegistrationOptions;
export declare type SingleLineLabel = string;
export declare type MultiLineLabel = string[];
export declare type Label = SingleLineLabel | MultiLineLabel;
export declare class BaseChartDirective implements OnDestroy, OnChanges, OnInit, OnDestroy, DoCheck {
    private element;
    private themeService;
    data: SingleOrMultiDataSet;
    datasets: chartJs.ChartDataSets[];
    labels: Label[];
    options: chartJs.ChartOptions;
    chartType: chartJs.ChartType;
    colors: Color[];
    legend: boolean;
    plugins: PluginServiceGlobalRegistrationAndOptions[];
    chartClick: EventEmitter<{
        event?: MouseEvent;
        active?: {}[];
    }>;
    chartHover: EventEmitter<{
        event: MouseEvent;
        active: {}[];
    }>;
    ctx: string;
    chart: Chart;
    private old;
    private subs;
    /**
     * Register a plugin.
     */
    static registerPlugin(plugin: PluginServiceGlobalRegistrationAndOptions): void;
    static unregisterPlugin(plugin: PluginServiceGlobalRegistrationAndOptions): void;
    constructor(element: ElementRef, themeService: ThemeService);
    ngOnInit(): void;
    private themeChanged;
    ngDoCheck(): void;
    copyLabel(a: Label): Label;
    labelsEqual(a: Label, b: Label): boolean;
    copyColor(a: Color): Color;
    colorsEqual(a: Color, b: Color): boolean;
    updateColors(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    update(duration?: any, lazy?: any): {};
    hideDataset(index: number, hidden: boolean): void;
    isDatasetHidden(index: number): boolean;
    toBase64Image(): string;
    getChartConfiguration(): chartJs.ChartConfiguration;
    getChartBuilder(ctx: string): Chart;
    smartMerge(options: any, overrides: any, level?: number): any;
    private isMultiLineLabel;
    private joinLabel;
    private propagateDatasetsToData;
    private propagateDataToDatasets;
    private isMultiDataSet;
    private getDatasets;
    private refresh;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseChartDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseChartDirective, "canvas[baseChart]", ["base-chart"], { "options": "options"; "data": "data"; "datasets": "datasets"; "labels": "labels"; "chartType": "chartType"; "colors": "colors"; "legend": "legend"; "plugins": "plugins"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiYmFzZS1jaGFydC5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2VzLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGNoYXJ0SnMgZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3InO1xyXG5pbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3RoZW1lLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFNpbmdsZURhdGFTZXQgPSAobnVtYmVyW10gfCBjaGFydEpzLkNoYXJ0UG9pbnRbXSk7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTXVsdGlEYXRhU2V0ID0gKG51bWJlcltdIHwgY2hhcnRKcy5DaGFydFBvaW50W10pW107XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgU2luZ2xlT3JNdWx0aURhdGFTZXQgPSBTaW5nbGVEYXRhU2V0IHwgTXVsdGlEYXRhU2V0O1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zID0gY2hhcnRKcy5QbHVnaW5TZXJ2aWNlR2xvYmFsUmVnaXN0cmF0aW9uICYgY2hhcnRKcy5QbHVnaW5TZXJ2aWNlUmVnaXN0cmF0aW9uT3B0aW9ucztcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTaW5nbGVMaW5lTGFiZWwgPSBzdHJpbmc7XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTXVsdGlMaW5lTGFiZWwgPSBzdHJpbmdbXTtcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBMYWJlbCA9IFNpbmdsZUxpbmVMYWJlbCB8IE11bHRpTGluZUxhYmVsO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCYXNlQ2hhcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U7XHJcbiAgICBkYXRhOiBTaW5nbGVPck11bHRpRGF0YVNldDtcclxuICAgIGRhdGFzZXRzOiBjaGFydEpzLkNoYXJ0RGF0YVNldHNbXTtcclxuICAgIGxhYmVsczogTGFiZWxbXTtcclxuICAgIG9wdGlvbnM6IGNoYXJ0SnMuQ2hhcnRPcHRpb25zO1xyXG4gICAgY2hhcnRUeXBlOiBjaGFydEpzLkNoYXJ0VHlwZTtcclxuICAgIGNvbG9yczogQ29sb3JbXTtcclxuICAgIGxlZ2VuZDogYm9vbGVhbjtcclxuICAgIHBsdWdpbnM6IFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zW107XHJcbiAgICBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8e1xyXG4gICAgICAgIGV2ZW50PzogTW91c2VFdmVudDtcclxuICAgICAgICBhY3RpdmU/OiB7fVtdO1xyXG4gICAgfT47XHJcbiAgICBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8e1xyXG4gICAgICAgIGV2ZW50OiBNb3VzZUV2ZW50O1xyXG4gICAgICAgIGFjdGl2ZToge31bXTtcclxuICAgIH0+O1xyXG4gICAgY3R4OiBzdHJpbmc7XHJcbiAgICBjaGFydDogQ2hhcnQ7XHJcbiAgICBwcml2YXRlIG9sZDtcclxuICAgIHByaXZhdGUgc3VicztcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBwbHVnaW4uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZWdpc3RlclBsdWdpbihwbHVnaW46IFBsdWdpblNlcnZpY2VHbG9iYWxSZWdpc3RyYXRpb25BbmRPcHRpb25zKTogdm9pZDtcclxuICAgIHN0YXRpYyB1bnJlZ2lzdGVyUGx1Z2luKHBsdWdpbjogUGx1Z2luU2VydmljZUdsb2JhbFJlZ2lzdHJhdGlvbkFuZE9wdGlvbnMpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgdGhlbWVTZXJ2aWNlOiBUaGVtZVNlcnZpY2UpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxuICAgIHByaXZhdGUgdGhlbWVDaGFuZ2VkO1xyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XHJcbiAgICBjb3B5TGFiZWwoYTogTGFiZWwpOiBMYWJlbDtcclxuICAgIGxhYmVsc0VxdWFsKGE6IExhYmVsLCBiOiBMYWJlbCk6IGJvb2xlYW47XHJcbiAgICBjb3B5Q29sb3IoYTogQ29sb3IpOiBDb2xvcjtcclxuICAgIGNvbG9yc0VxdWFsKGE6IENvbG9yLCBiOiBDb2xvcik6IGJvb2xlYW47XHJcbiAgICB1cGRhdGVDb2xvcnMoKTogdm9pZDtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHVwZGF0ZShkdXJhdGlvbj86IGFueSwgbGF6eT86IGFueSk6IHt9O1xyXG4gICAgaGlkZURhdGFzZXQoaW5kZXg6IG51bWJlciwgaGlkZGVuOiBib29sZWFuKTogdm9pZDtcclxuICAgIGlzRGF0YXNldEhpZGRlbihpbmRleDogbnVtYmVyKTogYm9vbGVhbjtcclxuICAgIHRvQmFzZTY0SW1hZ2UoKTogc3RyaW5nO1xyXG4gICAgZ2V0Q2hhcnRDb25maWd1cmF0aW9uKCk6IGNoYXJ0SnMuQ2hhcnRDb25maWd1cmF0aW9uO1xyXG4gICAgZ2V0Q2hhcnRCdWlsZGVyKGN0eDogc3RyaW5nKTogQ2hhcnQ7XHJcbiAgICBzbWFydE1lcmdlKG9wdGlvbnM6IGFueSwgb3ZlcnJpZGVzOiBhbnksIGxldmVsPzogbnVtYmVyKTogYW55O1xyXG4gICAgcHJpdmF0ZSBpc011bHRpTGluZUxhYmVsO1xyXG4gICAgcHJpdmF0ZSBqb2luTGFiZWw7XHJcbiAgICBwcml2YXRlIHByb3BhZ2F0ZURhdGFzZXRzVG9EYXRhO1xyXG4gICAgcHJpdmF0ZSBwcm9wYWdhdGVEYXRhVG9EYXRhc2V0cztcclxuICAgIHByaXZhdGUgaXNNdWx0aURhdGFTZXQ7XHJcbiAgICBwcml2YXRlIGdldERhdGFzZXRzO1xyXG4gICAgcHJpdmF0ZSByZWZyZXNoO1xyXG59XHJcbiJdfQ==