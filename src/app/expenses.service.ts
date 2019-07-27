import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  expenses = [];

  constructor(
    private http: HttpClient
  ) { }

  addToStorage(data) {
    this.expenses.push(data);
  }

  getStorage() {
    return this.expenses;
  }

  getAllMonth() {
    // return this.http.get('http://localhost:8080/expenses/month/');
    return this.http.get('/assets/expenses.json');
  }

  test() {
    return this.expenses;
  }

}
