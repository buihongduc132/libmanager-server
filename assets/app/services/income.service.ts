import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


import { Dish } from '../models/dish.ts';
import { DateIncome } from '../models/dateIncome';
import { DateIncomeDetail } from '../models/dateIncomeDetail';
import { MonthIncome } from '../models/monthIncome';

@Injectable()
export class IncomeService {
  constructor (private http: Http) {
    this.http = http;
  }
  private host = 'http://localhost:1337';
  private dishUrl = '/dishes';
  private dateIncomeUrl = '/dateincome';
  private monthIncomeUrl = '/monthincome';

  private fullDishUrl = this.host + this.dishUrl;
  private fullDateIncomeUrl = this.host + this.dateIncomeUrl;
  private fullMonthIncomeUrl = this.host + this.monthIncomeUrl;
  
  getDishes(): Promise<Dish[]> {
    return this.http.get(`${this.host}/${this.dishUrl}`)
    .toPromise()
    .then(reponse => reponse.json())
    .catch(this.handleError);
  }
  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}