import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderBarComponent} from './components/header-bar/header-bar.component';
import {MatButtonModule, MatDividerModule, MatTableModule, MatToolbarModule} from "@angular/material";
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderBarComponent,
        TransactionsListComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
