import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TaskHistory-card.component.html',
  styleUrls: ['./TaskHistory-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TaskHistory-card]': 'true'
  }
})

export class TaskHistoryCardComponent {


}