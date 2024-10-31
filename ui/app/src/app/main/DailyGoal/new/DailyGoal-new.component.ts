import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DailyGoal-new',
  templateUrl: './DailyGoal-new.component.html',
  styleUrls: ['./DailyGoal-new.component.scss']
})
export class DailyGoalNewComponent {
  @ViewChild("DailyGoalForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}