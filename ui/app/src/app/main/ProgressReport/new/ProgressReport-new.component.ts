import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ProgressReport-new',
  templateUrl: './ProgressReport-new.component.html',
  styleUrls: ['./ProgressReport-new.component.scss']
})
export class ProgressReportNewComponent {
  @ViewChild("ProgressReportForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}