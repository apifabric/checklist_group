import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriorityLevelHomeComponent } from './home/PriorityLevel-home.component';
import { PriorityLevelNewComponent } from './new/PriorityLevel-new.component';
import { PriorityLevelDetailComponent } from './detail/PriorityLevel-detail.component';

const routes: Routes = [
  {path: '', component: PriorityLevelHomeComponent},
  { path: 'new', component: PriorityLevelNewComponent },
  { path: ':id', component: PriorityLevelDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PriorityLevel-detail-permissions'
      }
    }
  }
];

export const PRIORITYLEVEL_MODULE_DECLARATIONS = [
    PriorityLevelHomeComponent,
    PriorityLevelNewComponent,
    PriorityLevelDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriorityLevelRoutingModule { }