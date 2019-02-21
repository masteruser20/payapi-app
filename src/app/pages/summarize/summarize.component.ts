import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.scss']
})
export class SummarizeComponent implements OnInit {
  status: string;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(val => {
      this.status = val.status;
    });
  }

  ngOnInit() {
  }

}
