import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service'

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss']
})
export class CalculatorPageComponent implements OnInit {

  dateInput: Date = new Date();
  ageResult: number = 0;

  ageInput: number = 0;
  checkboxBirthday: boolean = false;
  dateResult: Date = new Date();

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  onChangeDate(value: Date) {
    this.dateInput = new Date(value);
  }

  getAge(){
    this.ageResult = this.calculatorService.getAgeFromDoB(this.dateInput);
    console.log(this.ageResult);
  }

  getBirthday(){
    if(this.ageInput < 0){
      alert("La edad ingresaba debe ser mayor o igual a 0")
      return;
    }
    this.dateResult = this.calculatorService.getDoBfromAge(this.ageInput, this.checkboxBirthday);
    console.log(this.dateResult);
  }

}
