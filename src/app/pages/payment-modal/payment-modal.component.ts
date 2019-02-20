import {Component, OnInit} from '@angular/core';
import {PaymentMethodsService} from "../../services/payment-methods.service";
import {PaymentMethod} from "../../models/PaymentMethod";
import {Observable} from "rxjs";
import {ErrorStateMatcher} from "@angular/material";


export enum PAYMENT_METHOD {
    WITHDRAW,
    DEPOSIT
}

enum PAYMENT_STEPS {
    PAYMENT_METHOD_SELECT,
    USER_DATA
}

@Component({
    selector: 'app-payment-modal',
    templateUrl: './payment-modal.component.html',
    styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent implements OnInit {
    private paymentMethod: PAYMENT_METHOD;
    private PAYMENT_METHOD = PAYMENT_METHOD;
    PAYMENT_STEPS = PAYMENT_STEPS;
    paymentServices: Observable<PaymentMethod[]>;
    step = PAYMENT_STEPS.PAYMENT_METHOD_SELECT;
    matcher = new ErrorStateMatcher();
    constructor(private paymentMethodsService: PaymentMethodsService) {
    }

    async ngOnInit() {
        this.paymentMethodsService.getPaymentMethods();
        this.paymentServices = this.paymentMethodsService.paymentMethods;
    }

    onChoosePaymentMethod(paymentMethod: PAYMENT_METHOD) {
        this.paymentMethod = paymentMethod;
        this.step = PAYMENT_STEPS.USER_DATA;
    }
}
