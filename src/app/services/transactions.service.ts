import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Transaction} from "../models/Transaction";
import * as env from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TransactionsService {
    transactions: Observable<Transaction[]>;
    private _transactions: BehaviorSubject<Transaction[]>;
    private pagination: object;
    private data: {
        transactions: Transaction[]
    };

    constructor(private httpClient: HttpClient) {
        this.data = {transactions: []};
        this._transactions = <BehaviorSubject<Transaction[]>>new BehaviorSubject([]);
        this.transactions = this._transactions.asObservable();
    }

    loadTransactions() {
        return this.httpClient.get(`${env.environment.apiUrl}/transactions`).pipe(map((result: any) => {
            this.pagination = result.pagination;
            return result.data.map(transaction => {
                return new Transaction(
                    transaction.id,
                    transaction.user,
                    transaction.provider,
                    transaction.type,
                    transaction.status,
                    transaction.amount,
                    transaction.currency,
                )
            })
        })).subscribe(data => {
            this.data.transactions = data;
            this._transactions.next(Object.assign({}, this.data).transactions);
        }, error => {
            console.log(error);
        });
    }
}
