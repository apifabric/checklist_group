import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRewardHomeComponent } from './home/UserReward-home.component';
import { UserRewardNewComponent } from './new/UserReward-new.component';
import { UserRewardDetailComponent } from './detail/UserReward-detail.component';

const routes: Routes = [
  {path: '', component: UserRewardHomeComponent},
  { path: 'new', component: UserRewardNewComponent },
  { path: ':id', component: UserRewardDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserReward-detail-permissions'
      }
    }
  }
];

export const USERREWARD_MODULE_DECLARATIONS = [
    UserRewardHomeComponent,
    UserRewardNewComponent,
    UserRewardDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRewardRoutingModule { }