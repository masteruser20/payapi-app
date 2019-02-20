import {Component, OnInit} from '@angular/core';
import {PaymentMethodsService} from "../../services/payment-methods.service";
import {PaymentMethod} from "../../models/PaymentMethod";
import {Observable} from "rxjs";

export enum PAYMENT_METHOD {
    WITHDRAW,
    DEPOSIT
}

@Component({
    selector: 'app-payment-modal',
    templateUrl: './payment-modal.component.html',
    styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {
    private paymentMethod: PAYMENT_METHOD;
    private PAYMENT_METHOD = PAYMENT_METHOD;
    paymentServices: Observable<PaymentMethod[]>;

    constructor(private paymentMethodsService: PaymentMethodsService) {
    }

    async ngOnInit() {
        this.paymentMethodsService.getPaymentMethods();
        console.log(this.paymentMethodsService.paymentMethods);
        this.paymentServices = this.paymentMethodsService.paymentMethods;
    }

    onChoosePaymentMethod(paymentMethod: PAYMENT_METHOD) {
        this.paymentMethod = paymentMethod;
    }
}
