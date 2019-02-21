import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Transaction} from "../models/Transaction";
import * as env from "../../environments/environment";
import {map, share} from "rxjs/operators";
import {ITransactionData} from "../classes/interfaces/ITransactionData";
import {ITransactionsBaseService} from "../classes/interfaces/ITransactionsBaseService";

@Injectable({
    providedIn: 'root'
})
export class TransactionsService implements ITransactionsBaseService {
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

    loadTransactions(filters: any) : Observable<any> {
        filters = this.prepareFilters(filters);
        const request = this.httpClient.get(`${env.environment.apiUrl}/transactions?${filters}`)
            .pipe(share());

        request.pipe(map((result: any) => {
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
                    transaction.start_time,
                    transaction.end_time,
                    transaction.attributes
                )
            })
        })).subscribe(data => {
            console.log(data);
            this.data.transactions = data;
            this._transactions.next(Object.assign({}, this.data).transactions);
        }, error => {
            console.log(error);
        });

        return request;
    }

    createTransaction(transaction: ITransactionData): Observable<any> {
        return this.httpClient.post(`${env.environment.apiUrl}/transactions`, transaction);
    }

    prepareFilters(filters: any): string {
        return `limit=${filters.limit}&page=${filters.page}&order${filters.sort}&filters${filters.filter}`;
    }
}
