import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/DailyGoal', loadChildren: () => import('../DailyGoal/DailyGoal.module').then(m => m.DailyGoalModule),
    data: {
        oPermission: {
            permissionId: 'DailyGoal-detail-permissions'
        }
    }
},{
    path: ':user_id/Dashboard', loadChildren: () => import('../Dashboard/Dashboard.module').then(m => m.DashboardModule),
    data: {
        oPermission: {
            permissionId: 'Dashboard-detail-permissions'
        }
    }
},{
    path: ':user_id/Feedback', loadChildren: () => import('../Feedback/Feedback.module').then(m => m.FeedbackModule),
    data: {
        oPermission: {
            permissionId: 'Feedback-detail-permissions'
        }
    }
},{
    path: ':user_id/Task', loadChildren: () => import('../Task/Task.module').then(m => m.TaskModule),
    data: {
        oPermission: {
            permissionId: 'Task-detail-permissions'
        }
    }
},{
    path: ':user_id/UserReward', loadChildren: () => import('../UserReward/UserReward.module').then(m => m.UserRewardModule),
    data: {
        oPermission: {
            permissionId: 'UserReward-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }