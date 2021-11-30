import { Component } from '@angular/core';
import { INFLATION_RATE } from './inflation-rate';
import { IInflationRate } from './inflation-rate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inflationRate: IInflationRate[] = [];
  salary: number = 0;

  ngOnInit() {
    this.inflationRate = INFLATION_RATE;
    console.log(this.inflationRate);
  }

  calculateInflation(): void {
    let salary = this.salary;
    let salary2 = this.salary;
    this.inflationRate.forEach(item => {
      salary = salary + (salary / 100 * item.percentage * -1);
      item.salaryBasedOnInflation = salary;
    })
    this.inflationRate.forEach(item => {
      salary2 = salary2 + (salary2 / 100 * item.percentage);
      item.salaryToHave = salary2;
    })
  }
}
