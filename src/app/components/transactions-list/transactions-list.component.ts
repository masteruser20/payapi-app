import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Transaction} from "../../models/Transaction";
import {MatPaginator,  MatSort, PageEvent, Sort} from "@angular/material";
import {ITransactionsBaseService} from "../../classes/interfaces/ITransactionsBaseService";


@Component({
    selector: 'app-transactions-list',
    styleUrls: ['transactions-list.component.scss'],
    templateUrl: 'transactions-list.component.html',
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class TransactionsListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @Input() transactionsService: ITransactionsBaseService;

    isLoadingResults = true;
    transactions: any;
    columnsToDisplay = ['id', 'status', 'type', 'amount'];
    expandedElement: Transaction | null;
    totalCount: number;
    filterData: any = {};
    private filters = {
        page: 1,
        limit: 10,
        sort: '',
        filter: '',
    };

    ngOnInit(): void {
        this.fetchTransactions();
        this.transactions = this.transactionsService.transactions;
        this.transactions.sort = this.sort;
    }

    onNextPage(event: PageEvent): void {
        this.filters.limit = event.pageSize;
        this.filters.page = (event.pageIndex + 1);
        this.fetchTransactions();
    }

    fetchTransactions(): void {
        this.isLoadingResults = true;
        this.transactionsService.loadTransactions(this.filters).subscribe((result) => {
            this.isLoadingResults = false;
            this.totalCount = result.count;
            console.log(this.totalCount);
        });
    }

    onChangeSort(sortEvent: Sort): void {
        this.filters.sort = `[${[sortEvent.active]}]=${sortEvent.direction}`;
        this.fetchTransactions();
    }

    onApplyFilter(): void {
        if (this.filterData.key && this.filterData.value) {
            this.filters.filter = `[${[this.filterData.key]}]=${this.filterData.value}`;
            this.fetchTransactions();
        }
    }

    isObject(value: any) {
        return typeof value === 'object';
    }
}
