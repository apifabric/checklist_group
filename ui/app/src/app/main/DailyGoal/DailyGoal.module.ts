import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DAILYGOAL_MODULE_DECLARATIONS, DailyGoalRoutingModule} from  './DailyGoal-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DailyGoalRoutingModule
  ],
  declarations: DAILYGOAL_MODULE_DECLARATIONS,
  exports: DAILYGOAL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DailyGoalModule { }