import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PRIORITYLEVEL_MODULE_DECLARATIONS, PriorityLevelRoutingModule} from  './PriorityLevel-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PriorityLevelRoutingModule
  ],
  declarations: PRIORITYLEVEL_MODULE_DECLARATIONS,
  exports: PRIORITYLEVEL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PriorityLevelModule { }