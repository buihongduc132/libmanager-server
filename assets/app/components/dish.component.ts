import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Dish } from '../models/dish';

import { IncomeService } from '../services/income.service';

@Component({
    selector: 'dish-list',
    templateUrl: 'app/templates/dish.component.html'
})

export class DishListComponent implements OnInit {
    errorMessage: string;
    dishes: Dish[];
    mode = 'Observable';
    error: any;

    constructor(private incomeService : IncomeService) { 

    }

    // private dishesUrl = 'dishes';  // URL to web API


    ngOnInit() {
        this.getDishes();
    }

    getDishes() {
        this.incomeService
        .getDishes()
        .then(dishes => this.dishes = dishes)
        .catch(error => this.error = error);
    }
}