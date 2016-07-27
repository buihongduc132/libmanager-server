import { BaseObject } from './baseObject.ts';

export class DateIncome extends BaseObject {
  day: number;
  dateIncomeDetails: DateIncomeDetail[];  
}