import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TaskHistory-new',
  templateUrl: './TaskHistory-new.component.html',
  styleUrls: ['./TaskHistory-new.component.scss']
})
export class TaskHistoryNewComponent {
  @ViewChild("TaskHistoryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}