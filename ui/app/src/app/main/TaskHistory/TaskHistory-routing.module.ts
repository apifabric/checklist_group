import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskHistoryHomeComponent } from './home/TaskHistory-home.component';
import { TaskHistoryNewComponent } from './new/TaskHistory-new.component';
import { TaskHistoryDetailComponent } from './detail/TaskHistory-detail.component';

const routes: Routes = [
  {path: '', component: TaskHistoryHomeComponent},
  { path: 'new', component: TaskHistoryNewComponent },
  { path: ':id', component: TaskHistoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TaskHistory-detail-permissions'
      }
    }
  }
];

export const TASKHISTORY_MODULE_DECLARATIONS = [
    TaskHistoryHomeComponent,
    TaskHistoryNewComponent,
    TaskHistoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskHistoryRoutingModule { }