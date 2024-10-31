import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardHomeComponent } from './home/Reward-home.component';
import { RewardNewComponent } from './new/Reward-new.component';
import { RewardDetailComponent } from './detail/Reward-detail.component';

const routes: Routes = [
  {path: '', component: RewardHomeComponent},
  { path: 'new', component: RewardNewComponent },
  { path: ':id', component: RewardDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Reward-detail-permissions'
      }
    }
  },{
    path: ':reward_id/UserReward', loadChildren: () => import('../UserReward/UserReward.module').then(m => m.UserRewardModule),
    data: {
        oPermission: {
            permissionId: 'UserReward-detail-permissions'
        }
    }
}
];

export const REWARD_MODULE_DECLARATIONS = [
    RewardHomeComponent,
    RewardNewComponent,
    RewardDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RewardRoutingModule { }