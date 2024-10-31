import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyGoalHomeComponent } from './home/DailyGoal-home.component';
import { DailyGoalNewComponent } from './new/DailyGoal-new.component';
import { DailyGoalDetailComponent } from './detail/DailyGoal-detail.component';

const routes: Routes = [
  {path: '', component: DailyGoalHomeComponent},
  { path: 'new', component: DailyGoalNewComponent },
  { path: ':id', component: DailyGoalDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DailyGoal-detail-permissions'
      }
    }
  }
];

export const DAILYGOAL_MODULE_DECLARATIONS = [
    DailyGoalHomeComponent,
    DailyGoalNewComponent,
    DailyGoalDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyGoalRoutingModule { }