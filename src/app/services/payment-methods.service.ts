import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaymentMethod} from "../models/PaymentMethod";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PaymentMethodsService {
    paymentMethods: PaymentMethod;

    constructor(private httpClient: HttpClient) {
    }

    getPaymentMethods() {
        this.httpClient.get(environment.apiUrl + '/methods').pipe(map((result: any) => {
            return result.map((paymentMethod) => {
                return new PaymentMethod(
                    paymentMethod.name,
                    paymentMethod.label,
                    paymentMethod.types,
                    paymentMethod.additionalData
                );
            });
        })).subscribe(paymentMethods => {
            this.paymentMethods = paymentMethods;
        }, error => {
            console.log(error);
        });
    }
}
