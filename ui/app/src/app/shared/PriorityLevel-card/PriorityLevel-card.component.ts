import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PriorityLevel-card.component.html',
  styleUrls: ['./PriorityLevel-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PriorityLevel-card]': 'true'
  }
})

export class PriorityLevelCardComponent {


}