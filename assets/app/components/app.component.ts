import { Component } from '@angular/core';

import { RouteConfig, 
    ROUTER_DIRECTIVES, 
    ROUTER_PROVIDERS  } from '@angular/router-deprecated';

// import { HomepageComponent } from './homepage.component';
// import { MyVoterComponent } from './my-voter.component';
// import { VoteTakerComponent} from './vote-taker.component';

import { IncomeService } from '../services/income.service';

import { DishListComponent } from './dish.component';
import { DailyListComponent } from './daily-list.component';
import { DailyDetailComponent } from './daily-detail.component';
import { MonthlyListComponent } from './monthly-list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        IncomeService,
        ROUTER_PROVIDERS,

    ]
})

@RouteConfig([
    {
        path: 'dishes',
        name: 'DishList',
        component: DishListComponent,
        useAsDefault: true
    },
    {
        path: 'daily-list',
        name: 'DailyList',
        component: DailyListComponent
    },
    {
        path: 'daily-detail',
        name: 'DailyDetail',
        component: DailyDetailComponent
    },
    {
        path: 'monthly-list',
        name: 'MonthlyList',
        component: MonthlyListComponent
    }
    // {
    //     path: 'homepage',
    //     name: 'Homepage',
    //     component: HomepageComponent,
    //     useAsDefault: true
    // },
    // {
    //     path: 'my-voter',
    //     name: 'MyVoter',
    //     component: MyVoterComponent
    // },
    // {
    //     path: 'vote-taker',
    //     name: 'VoteTaker',
    //     component: VoteTakerComponent
    // }
])

//Dish List
//Edit Dish 
//Add Dish

//Daily Income
//Daily Income Detail
//Edit Daily Income + Detail
//Add Daily Income + Detail 

//Monthly Income
//Edit Monthly Income
//Add Montly Income

export class AppComponent {

    title = "Lib Manager"

}