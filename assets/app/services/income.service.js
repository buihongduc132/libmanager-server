System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var IncomeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            IncomeService = (function () {
                function IncomeService(http) {
                    this.http = http;
                    this.host = 'http://localhost:1337';
                    this.dishUrl = '/dishes';
                    this.dateIncomeUrl = '/dateincome';
                    this.monthIncomeUrl = '/monthincome';
                    this.fullDishUrl = this.host + this.dishUrl;
                    this.fullDateIncomeUrl = this.host + this.dateIncomeUrl;
                    this.fullMonthIncomeUrl = this.host + this.monthIncomeUrl;
                    this.http = http;
                }
                IncomeService.prototype.getDishes = function () {
                    return this.http.get(this.host + "/" + this.dishUrl)
                        .toPromise()
                        .then(function (reponse) { return reponse.json(); })
                        .catch(this.handleError);
                };
                IncomeService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                IncomeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], IncomeService);
                return IncomeService;
            }());
            exports_1("IncomeService", IncomeService);
        }
    }
});
//# sourceMappingURL=income.service.js.map