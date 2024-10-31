import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ProgressReport-card.component.html',
  styleUrls: ['./ProgressReport-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ProgressReport-card]': 'true'
  }
})

export class ProgressReportCardComponent {


}