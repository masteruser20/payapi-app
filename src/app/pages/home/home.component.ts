import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {Observable} from "rxjs";
import {Transaction} from "../../models/Transaction";
import {PaymentMethodsService} from "../../services/payment-methods.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    transactions: Observable<Transaction[]>;
    constructor(private transactionsService: TransactionsService) {
    }

    ngOnInit() {
        this.transactions = this.transactionsService.transactions;
        this.transactionsService.loadTransactions();
    }

}
