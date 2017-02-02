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
 * Created by Lenovo on 31-Dec-16.
 */
var core_1 = require('@angular/core');
var professor_list_provider_service_1 = require('../../services/professor-list-provider.service');
var professorCatalogue = (function () {
    function professorCatalogue(ProfessorListProvider) {
        this.ProfessorListProvider = ProfessorListProvider;
    }
    professorCatalogue.prototype.ngOnInit = function () {
        this.getProfessors();
    };
    // TODO:figure out a better way to subscribe, this works but is not recognizing it as a JSON
    professorCatalogue.prototype.getProfessors = function () {
        var _this = this;
        this.ProfessorListProvider.getProfs().subscribe(function (p) { return _this.professors = p.professors; });
    };
    professorCatalogue = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'catalogue',
            templateUrl: "professor-catalogue.component.html",
            styleUrls: ['professor-catalogue.component.css']
        }), 
        __metadata('design:paramtypes', [professor_list_provider_service_1.ProfessorListProvider])
    ], professorCatalogue);
    return professorCatalogue;
}());
exports.professorCatalogue = professorCatalogue;
//# sourceMappingURL=professor-catalogue.component.js.map