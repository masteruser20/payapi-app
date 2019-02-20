import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaymentMethod} from "../models/PaymentMethod";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable, Subscription} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PaymentMethodsService {
    paymentMethods: Observable<PaymentMethod[]>;
    private _paymentMethods: BehaviorSubject<PaymentMethod[]>;

    constructor(private httpClient: HttpClient) {
        this._paymentMethods = <BehaviorSubject<PaymentMethod[]>>new BehaviorSubject([]);
        this.paymentMethods = this._paymentMethods.asObservable();
    }

    getPaymentMethods(): Subscription {
        return this.httpClient.get(environment.apiUrl + '/methods').pipe(map((result: any) => {
            return result.map((paymentMethod) => {
                return new PaymentMethod(
                    paymentMethod.id,
                    paymentMethod.name,
                    paymentMethod.label,
                    paymentMethod.types,
                    paymentMethod.additionalData
                );
            });
        })).subscribe(paymentMethods => {
            this._paymentMethods.next(paymentMethods);
        }, error => {
            console.log(error);
        });
    }
}
