import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderBarComponent} from './components/header-bar/header-bar.component';
import {MatButtonModule, MatToolbarModule} from "@angular/material";


@NgModule({
    declarations: [
        AppComponent,
        HeaderBarComponent,
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
