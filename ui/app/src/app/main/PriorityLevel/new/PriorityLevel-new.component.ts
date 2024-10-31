import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PriorityLevel-new',
  templateUrl: './PriorityLevel-new.component.html',
  styleUrls: ['./PriorityLevel-new.component.scss']
})
export class PriorityLevelNewComponent {
  @ViewChild("PriorityLevelForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}