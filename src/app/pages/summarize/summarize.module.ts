import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummarizeComponent } from '../summarize/summarize.component';
import {RouterModule, Routes} from "@angular/router";

export const ROUTES: Routes = [
  { path: '', component: SummarizeComponent}
];

@NgModule({
  declarations: [SummarizeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class SummarizeModule { }
