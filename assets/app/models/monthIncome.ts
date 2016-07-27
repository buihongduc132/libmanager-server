import { BaseObject } from './baseObject.ts';
import { DateIncome } from './dateIncome.ts';


export class MonthIncome extends BaseObject{
  month: number;
  year: number;
  dateIncomes: DateIncome[]; 
}
