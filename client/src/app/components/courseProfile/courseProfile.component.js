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
var course_1 = require('../../objects/course');
var course_detail_provider_service_1 = require('../../services/course-detail-provider.service');
var courseProfile = (function () {
    function courseProfile(CourseDetailProvider) {
        this.CourseDetailProvider = CourseDetailProvider;
        this.rotatingCardClasses = { 'card-container': true, 'manual-flip': true, 'hover': false };
    }
    //when the input changes, request the new course details.
    courseProfile.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.myCourse.currentValue != undefined) {
            console.log(this.myCourse._id);
            this.CourseDetailProvider.getDetail(this.myCourse._id).subscribe(function (details) { return _this.currentCourse = details; });
        }
    };
    //used to change the class of the card element, in order to trigger the animation
    courseProfile.prototype.rotateCard = function () {
        if (this.rotatingCardClasses.hover == false) {
            this.rotatingCardClasses.hover = true;
        }
        else {
            this.rotatingCardClasses.hover = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', course_1.course)
    ], courseProfile.prototype, "myCourse", void 0);
    courseProfile = __decorate([
        core_1.Component({
            selector: 'course-profile',
            moduleId: module.id,
            templateUrl: "courseProfile.component.html",
            styleUrls: ['courseProfile.component.css', 'rotating-card.css']
        }), 
        __metadata('design:paramtypes', [course_detail_provider_service_1.CourseDetailProvider])
    ], courseProfile);
    return courseProfile;
}());
exports.courseProfile = courseProfile;
//# sourceMappingURL=courseProfile.component.js.map