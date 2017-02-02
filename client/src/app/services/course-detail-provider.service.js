"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Lenovo on 01-Jan-17.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var CourseDetailProvider = (function () {
    function CourseDetailProvider(http) {
        this.http = http;
    }
    CourseDetailProvider.prototype.getDetail = function (id) {
        var params = new http_1.URLSearchParams();
        params.set("id", id);
        return this.http.get('/courseDetails', {
            search: params
        })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CourseDetailProvider.prototype.extractData = function (res) {
        return res.json();
    };
    CourseDetailProvider.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    CourseDetailProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], CourseDetailProvider);
    return CourseDetailProvider;
    var _a;
}());
exports.CourseDetailProvider = CourseDetailProvider;
//# sourceMappingURL=course-detail-provider.service.js.map