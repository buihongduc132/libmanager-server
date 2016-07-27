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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
// import { HomepageComponent } from './homepage.component';
// import { MyVoterComponent } from './my-voter.component';
// import { VoteTakerComponent} from './vote-taker.component';
var dish_component_1 = require('./dish.component');
var daily_list_component_1 = require('./daily-list.component');
var daily_detail_component_1 = require('./daily-detail.component');
var monthly_list_component_1 = require('./monthly-list.component');
var AppComponent = (function () {
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
                router_deprecated_1.ROUTER_PROVIDERS
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
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map