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
  years: number[] = [];
  selectedYear: number = 2003;

  ngOnInit() {
    this.inflationRate = INFLATION_RATE;
    this.years = this.inflationRate.map(item => item.year);
  }

  calculateInflation(): void {
    let salary = this.salary;
    let salary2 = this.salary;
    this.inflationRate = INFLATION_RATE.filter(item => item.year >= this.selectedYear);

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
