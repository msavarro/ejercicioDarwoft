import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  getAgeFromDoB(dob: Date) {
    console.log(dob);
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    var aux = age_dt.getUTCFullYear() - 1970;
    if (aux > 0){
      return Math.abs(aux);
    }
    return 0;
  }

  getDoBfromAge(age: number){
    console.log(age);
    var año = 2021 - age;
    console.log(año);
    return new Date(año,0);
  }
}
