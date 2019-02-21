import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {HomeComponent} from "./pages/home/home.component";


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'summarize', loadChildren: './pages/summarize/summarize.module#SummarizeModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}