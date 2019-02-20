import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderBarComponent} from './components/header-bar/header-bar.component';
import {MatButtonModule, MatDialogModule, MatDividerModule, MatTableModule, MatToolbarModule} from "@angular/material";
import {TransactionsListComponent} from './components/transactions-list/transactions-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {PaymentModalComponent} from './pages/payment-modal/payment-modal.component';

@NgModule({
    entryComponents: [
        PaymentModalComponent
    ],
    declarations: [
        AppComponent,
        HeaderBarComponent,
        TransactionsListComponent,
        HomeComponent,
        PaymentModalComponent
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
