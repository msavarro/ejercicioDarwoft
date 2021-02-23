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
    this.dateResult = this.calculatorService.getDoBfromAge(this.ageInput);
    console.log(this.dateResult);
  }

}
