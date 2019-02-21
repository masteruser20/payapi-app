import {Component, ViewEncapsulation} from '@angular/core';
import {LoaderController} from "./helpers/loader-controller";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(public loaderCtrl: LoaderController) {

  }
}
