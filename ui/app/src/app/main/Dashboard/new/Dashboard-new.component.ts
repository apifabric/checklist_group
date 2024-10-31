import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Dashboard-new',
  templateUrl: './Dashboard-new.component.html',
  styleUrls: ['./Dashboard-new.component.scss']
})
export class DashboardNewComponent {
  @ViewChild("DashboardForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}