import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DASHBOARD_MODULE_DECLARATIONS, DashboardRoutingModule} from  './Dashboard-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DashboardRoutingModule
  ],
  declarations: DASHBOARD_MODULE_DECLARATIONS,
  exports: DASHBOARD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }