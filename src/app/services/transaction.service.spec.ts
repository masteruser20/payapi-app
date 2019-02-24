import {TestBed, async} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TransactionsService} from "./transactions.service";
import {environment} from "../../environments/environment";
import {Transaction} from "../models/Transaction";

describe('TransactionService', () => {
    let transactionService: TransactionsService;
    let httpMock: any;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        transactionService = TestBed.get(TransactionsService);
        httpMock = TestBed.get(HttpTestingController);
    }));


    it('should return transactions collection', () => {
        const transactions = {
            "pagination": {
                "limit": 10,
                "page": 0,
                "order": {
                    "id": "ASC"
                }
            },
            "data": [
                {
                    "id": 1,
                    "user": 1,
                    "provider": "paypal",
                    "type": "deposit",
                    "start_time": "2018-10-19 15:33:14",
                    "end_time": "2018-10-19 15:33:16",
                    "status": "success",
                    "amount": 100,
                    "currency": "EUR",
                    "attributes": []
                }
            ]
        };

        const filters = {
            page: 1,
            limit: 10,
            sort: '[status]=asc',
            filter: '[status]=created',
        };

        transactionService.loadTransactions(filters).subscribe(() => {
            transactionService.transactions.subscribe((result) => {
                expect(result.length).toBe(1);
                expect(result[0].constructor.name).toEqual(Transaction.name);
            })
        });

        const req = httpMock.expectOne(`${environment.apiUrl}/transactions?limit=10&page=1&order[status]=asc&filters[status]=created`);
        expect(req.request.method).toEqual('GET');
        req.flush(transactions);
    });
});
