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

  getDoBfromAge(age: number, birthday: boolean){
    console.log(age);
    var aux = birthday ? 0 : 1;
    var año = 2021 - age - aux;
    console.log(año);
    return new Date(año,0);
  }
}
