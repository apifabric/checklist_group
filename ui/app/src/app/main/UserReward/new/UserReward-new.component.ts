import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserReward-new',
  templateUrl: './UserReward-new.component.html',
  styleUrls: ['./UserReward-new.component.scss']
})
export class UserRewardNewComponent {
  @ViewChild("UserRewardForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}