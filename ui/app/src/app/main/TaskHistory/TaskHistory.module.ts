import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TASKHISTORY_MODULE_DECLARATIONS, TaskHistoryRoutingModule} from  './TaskHistory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TaskHistoryRoutingModule
  ],
  declarations: TASKHISTORY_MODULE_DECLARATIONS,
  exports: TASKHISTORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskHistoryModule { }