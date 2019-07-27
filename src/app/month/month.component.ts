import { Component, OnInit } from '@angular/core';

import { ExpensesService} from '../expenses.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.sass']
})

export class MonthComponent implements OnInit {
  expensesAllMonth;

  constructor(
    private expensesService: ExpensesService
  ) {
    const d = new Date('2017-10-23 00:00:00');
    console.log(d.getDate);
    this.expensesAllMonth = this.expensesService.getAllMonth();
  }

  ngOnInit() {
  }

}
