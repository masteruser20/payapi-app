import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Transaction} from "../../models/Transaction";


@Component({
  selector: 'transactions-list',
  styleUrls: ['transactions-list.component.scss'],
  templateUrl: 'transactions-list.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionsListComponent {
  @Input() transactions: Transaction[];
  columnsToDisplay = ['id', 'provider', 'amount'];
  expandedElement: Transaction | null;
}
