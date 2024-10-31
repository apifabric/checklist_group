import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './home/Dashboard-home.component';
import { DashboardNewComponent } from './new/Dashboard-new.component';
import { DashboardDetailComponent } from './detail/Dashboard-detail.component';

const routes: Routes = [
  {path: '', component: DashboardHomeComponent},
  { path: 'new', component: DashboardNewComponent },
  { path: ':id', component: DashboardDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Dashboard-detail-permissions'
      }
    }
  },{
    path: ':dashboard_id/ProgressReport', loadChildren: () => import('../ProgressReport/ProgressReport.module').then(m => m.ProgressReportModule),
    data: {
        oPermission: {
            permissionId: 'ProgressReport-detail-permissions'
        }
    }
}
];

export const DASHBOARD_MODULE_DECLARATIONS = [
    DashboardHomeComponent,
    DashboardNewComponent,
    DashboardDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }