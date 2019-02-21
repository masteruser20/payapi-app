import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderBarComponent} from './components/header-bar/header-bar.component';
import {
    MAT_DATE_FORMATS,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule, MatOptionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from "@angular/material";
import {TransactionsListComponent} from './components/transactions-list/transactions-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {PaymentModalComponent} from './pages/payment-modal/payment-modal.component';
import {FormsModule} from "@angular/forms";
import {
    MatMomentDateModule,
    MomentDateModule
} from "@angular/material-moment-adapter";
import {MAT_MOMENT_DATE_FORMAT} from "./helpers/date-format";

@NgModule({
    entryComponents: [
        PaymentModalComponent
    ],
    declarations: [
        AppComponent,
        HeaderBarComponent,
        TransactionsListComponent,
        HomeComponent,
        PaymentModalComponent,
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
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatRadioModule,
        MatMomentDateModule,
        MomentDateModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatOptionModule
    ],
    providers: [
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMAT}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
