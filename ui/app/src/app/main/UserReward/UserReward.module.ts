import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERREWARD_MODULE_DECLARATIONS, UserRewardRoutingModule} from  './UserReward-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserRewardRoutingModule
  ],
  declarations: USERREWARD_MODULE_DECLARATIONS,
  exports: USERREWARD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserRewardModule { }