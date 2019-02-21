import {Observable} from 'rxjs';
import {Transaction} from "../../models/Transaction";

export interface ITransactionsBaseService {
    transactions: Observable<Transaction[]>;
    loadTransactions(filters: any): Observable<any>;
}