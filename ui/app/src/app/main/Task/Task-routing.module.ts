import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskHomeComponent } from './home/Task-home.component';
import { TaskNewComponent } from './new/Task-new.component';
import { TaskDetailComponent } from './detail/Task-detail.component';

const routes: Routes = [
  {path: '', component: TaskHomeComponent},
  { path: 'new', component: TaskNewComponent },
  { path: ':id', component: TaskDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Task-detail-permissions'
      }
    }
  },{
    path: ':task_id/TaskCategory', loadChildren: () => import('../TaskCategory/TaskCategory.module').then(m => m.TaskCategoryModule),
    data: {
        oPermission: {
            permissionId: 'TaskCategory-detail-permissions'
        }
    }
},{
    path: ':task_id/TaskHistory', loadChildren: () => import('../TaskHistory/TaskHistory.module').then(m => m.TaskHistoryModule),
    data: {
        oPermission: {
            permissionId: 'TaskHistory-detail-permissions'
        }
    }
}
];

export const TASK_MODULE_DECLARATIONS = [
    TaskHomeComponent,
    TaskNewComponent,
    TaskDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }