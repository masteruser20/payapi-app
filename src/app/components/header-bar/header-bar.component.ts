import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {PaymentModalComponent} from "../../pages/payment-modal/payment-modal.component";

@Component({
    selector: 'app-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {

    constructor(private matDialog: MatDialog) {
    }

    ngOnInit() {
    }

    onShowCashierModal(): void {
        this.matDialog.open(PaymentModalComponent);
    }

}
