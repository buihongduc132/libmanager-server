System.register(['@angular/core', '../services/income.service'], function(exports_1, context_1) {
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
    var core_1, income_service_1;
    var DishListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (income_service_1_1) {
                income_service_1 = income_service_1_1;
            }],
        execute: function() {
            DishListComponent = (function () {
                function DishListComponent(incomeService) {
                    this.incomeService = incomeService;
                    this.mode = 'Observable';
                }
                // private dishesUrl = 'dishes';  // URL to web API
                DishListComponent.prototype.ngOnInit = function () {
                    this.getDishes();
                };
                DishListComponent.prototype.getDishes = function () {
                    var _this = this;
                    this.incomeService
                        .getDishes()
                        .then(function (dishes) { return _this.dishes = dishes; })
                        .catch(function (error) { return _this.error = error; });
                };
                DishListComponent = __decorate([
                    core_1.Component({
                        selector: 'dish-list',
                        templateUrl: 'app/templates/dish.component.html'
                    }), 
                    __metadata('design:paramtypes', [income_service_1.IncomeService])
                ], DishListComponent);
                return DishListComponent;
            }());
            exports_1("DishListComponent", DishListComponent);
        }
    }
});
//# sourceMappingURL=dish.component.js.map