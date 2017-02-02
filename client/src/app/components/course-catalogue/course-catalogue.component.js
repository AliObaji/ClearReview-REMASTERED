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
 * Created by Lenovo on 30-Dec-16.
 */
var core_1 = require('@angular/core');
var course_detail_provider_service_1 = require('../../services/course-detail-provider.service');
var course_list_provider_service_1 = require('../../services/course-list-provider.service');
var courseCatalogue = (function () {
    function courseCatalogue(CourseDetailProvider, CourseListProvider) {
        this.CourseDetailProvider = CourseDetailProvider;
        this.CourseListProvider = CourseListProvider;
    }
    courseCatalogue.prototype.ngOnInit = function () {
        this.getCourses();
    };
    // TODO:figure out a better way to subscribe, this works but is not recognizing it as a JSON
    courseCatalogue.prototype.getCourses = function () {
        var _this = this;
        // this.CourseListProvider.test().subscribe(thing => console.log(thing.num));
        this.CourseListProvider.getCourses().subscribe(function (c) { return _this.courses = c.courses; });
    };
    courseCatalogue.prototype.viewProfile = function (c) {
        this.selectedCourse = c;
        console.log("we are getting the id in cat" + c);
    };
    courseCatalogue = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'catalogue',
            templateUrl: 'course-catalogue.component.html',
            styleUrls: ['course-catalogue.component.css']
        }), 
        __metadata('design:paramtypes', [course_detail_provider_service_1.CourseDetailProvider, course_list_provider_service_1.CourseListProvider])
    ], courseCatalogue);
    return courseCatalogue;
}());
exports.courseCatalogue = courseCatalogue;
//# sourceMappingURL=course-catalogue.component.js.map