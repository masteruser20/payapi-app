import {TestBed, async, tick, fakeAsync} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../environments/environment";
import {PaymentMethodsService} from "./payment-methods.service";
import {PaymentMethod} from "../models/PaymentMethod";

describe('PaymentMethodsService', () => {
    let paymentMethodsService: PaymentMethodsService;
    let httpMock: any;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        paymentMethodsService = TestBed.get(PaymentMethodsService);
        httpMock = TestBed.get(HttpTestingController);
    }));


    it('should return payment methods collection', fakeAsync(() => {
        const  paymentMethods = [{
            "name": "paypal",
            "label": "PayPal",
            "types": [
                "deposit",
                "withdraw"
            ],
            "additionalData": [
                {
                    "name": "username",
                    "label": "User name",
                    "type": "text",
                    "required": true
                },
                {
                    "name": "password",
                    "label": "Password",
                    "type": "password",
                    "required": true
                }
            ]
        }];

        paymentMethodsService.getPaymentMethods().subscribe(() => {
            paymentMethodsService.paymentMethods.subscribe((result) => {
                expect(result.length).toBe(1);
                expect(result[0].constructor.name).toEqual(PaymentMethod.name);
            });
        });

        const req = httpMock.expectOne(`${environment.apiUrl}/methods`);
        expect(req.request.method).toEqual('GET');
        req.flush(paymentMethods);

    }));
});
