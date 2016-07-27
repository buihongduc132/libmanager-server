import { BaseObject } from './baseObject.ts';
import { Dish } from './dish.ts';
import { DateIncome } from './dateIncome.ts';

export class DateIncomeDetail extends BaseObject{
  day: number;
  dish: Dish;
  amount: number;
  discount: number;
  dateIncome: DateIncome;
}
