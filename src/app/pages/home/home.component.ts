import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(public transactionsService: TransactionsService) {
    }

    ngOnInit() {
    }

}
