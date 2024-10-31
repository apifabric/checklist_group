import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PROGRESSREPORT_MODULE_DECLARATIONS, ProgressReportRoutingModule} from  './ProgressReport-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProgressReportRoutingModule
  ],
  declarations: PROGRESSREPORT_MODULE_DECLARATIONS,
  exports: PROGRESSREPORT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgressReportModule { }