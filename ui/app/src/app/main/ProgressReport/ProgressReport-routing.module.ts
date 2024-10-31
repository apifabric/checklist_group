import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressReportHomeComponent } from './home/ProgressReport-home.component';
import { ProgressReportNewComponent } from './new/ProgressReport-new.component';
import { ProgressReportDetailComponent } from './detail/ProgressReport-detail.component';

const routes: Routes = [
  {path: '', component: ProgressReportHomeComponent},
  { path: 'new', component: ProgressReportNewComponent },
  { path: ':id', component: ProgressReportDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ProgressReport-detail-permissions'
      }
    }
  }
];

export const PROGRESSREPORT_MODULE_DECLARATIONS = [
    ProgressReportHomeComponent,
    ProgressReportNewComponent,
    ProgressReportDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressReportRoutingModule { }