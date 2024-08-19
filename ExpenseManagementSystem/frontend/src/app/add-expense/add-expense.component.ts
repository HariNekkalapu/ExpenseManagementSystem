import { Component } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

  expense: Expense = new Expense();

  constructor(private expenseService: ExpenseService) { }

  onSubmit(): void {
    this.expenseService.addExpense(this.expense).subscribe(result => console.log('Expense Added'));
  }
}
