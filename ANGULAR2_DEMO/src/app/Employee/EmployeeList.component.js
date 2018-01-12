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
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.selectedEmployeeCountRadioButton = "All";
        this.employees = [
            { code: 'emp101', name: 'Max', title: 'Programmer', salary: 11111, dateofhire: '01/01/2001' },
            { code: 'emp102', name: 'Maxine', title: 'Programmer', salary: 22222, dateofhire: '02/02/2002' },
            { code: 'emp103', name: 'Maximo', title: 'Programmer', salary: 33333, dateofhire: '03/03/2003' },
            { code: 'emp104', name: 'Maxwell', title: 'Programmer', salary: 44444, dateofhire: '04/04/2004' },
            { code: 'emp105', name: 'Maximillion', title: 'Manager', salary: 55555, dateofhire: '05/05/2005' },
            { code: 'emp106', name: 'Jake', title: 'Manager', salary: 66666, dateofhire: '06/06/2006' },
            { code: 'emp107', name: 'Mary', title: 'Manager', salary: 77777, dateofhire: '07/07/2007' },
            { code: 'emp108', name: 'Mari', title: 'Director', salary: 88888, dateofhire: '08/08/2008' },
            { code: 'emp109', name: 'Maria', title: 'Director', salary: 99999, dateofhire: '09/09/2009' },
            { code: 'emp110', name: 'Mario', title: 'Manager', salary: 101010, dateofhire: '10/10/2010' },
            { code: 'emp111', name: 'Jessi', title: 'Programmer', salary: 121212, dateofhire: '11/11/2011' },
            { code: 'emp112', name: 'Julia', title: 'Programmer', salary: 131313, dateofhire: '12/12/2012' },
            { code: 'emp113', name: 'Jack', title: 'Programmer', salary: 141414, dateofhire: '01/14/2014' }
        ];
    } //constructor
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalDirectorsCount = function () {
        return this.employees.filter(function (keep) { return keep.title == 'Director'; }).length;
    };
    EmployeeListComponent.prototype.getTotalManagersCount = function () {
        return this.employees.filter(function (keep) { return keep.title == 'Manager'; }).length;
    };
    EmployeeListComponent.prototype.getTotalProgrammersCount = function () {
        return this.employees.filter(function (keep) { return keep.title == 'Programmer'; }).length;
    };
    /* when the child radio button change event is emitted it is captured here */
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButton) {
        //bring selected button from child into this program
        this.selectedEmployeeCountRadioButton = selectedRadioButton;
    };
    return EmployeeListComponent;
}()); //end
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: 'app/Employee/EmployeeList.component.html',
        styleUrls: ['app/Employee/EmployeeList.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=EmployeeList.component.js.map