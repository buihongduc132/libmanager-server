System.register(['@angular/core', '@angular/router-deprecated', '../services/income.service', './dish.component', './daily-list.component', './daily-detail.component', './monthly-list.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, income_service_1, dish_component_1, daily_list_component_1, daily_detail_component_1, monthly_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (income_service_1_1) {
                income_service_1 = income_service_1_1;
            },
            function (dish_component_1_1) {
                dish_component_1 = dish_component_1_1;
            },
            function (daily_list_component_1_1) {
                daily_list_component_1 = daily_list_component_1_1;
            },
            function (daily_detail_component_1_1) {
                daily_detail_component_1 = daily_detail_component_1_1;
            },
            function (monthly_list_component_1_1) {
                monthly_list_component_1 = monthly_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Lib Manager";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/app.component.html',
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            income_service_1.IncomeService,
                            router_deprecated_1.ROUTER_PROVIDERS,
                        ]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: 'dishes',
                            name: 'DishList',
                            component: dish_component_1.DishListComponent,
                            useAsDefault: true
                        },
                        {
                            path: 'daily-list',
                            name: 'DailyList',
                            component: daily_list_component_1.DailyListComponent
                        },
                        {
                            path: 'daily-detail',
                            name: 'DailyDetail',
                            component: daily_detail_component_1.DailyDetailComponent
                        },
                        {
                            path: 'monthly-list',
                            name: 'MonthlyList',
                            component: monthly_list_component_1.MonthlyListComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map