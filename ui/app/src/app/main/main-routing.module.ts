import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Category', loadChildren: () => import('./Category/Category.module').then(m => m.CategoryModule) },
    
        { path: 'DailyGoal', loadChildren: () => import('./DailyGoal/DailyGoal.module').then(m => m.DailyGoalModule) },
    
        { path: 'Dashboard', loadChildren: () => import('./Dashboard/Dashboard.module').then(m => m.DashboardModule) },
    
        { path: 'Feedback', loadChildren: () => import('./Feedback/Feedback.module').then(m => m.FeedbackModule) },
    
        { path: 'PriorityLevel', loadChildren: () => import('./PriorityLevel/PriorityLevel.module').then(m => m.PriorityLevelModule) },
    
        { path: 'ProgressReport', loadChildren: () => import('./ProgressReport/ProgressReport.module').then(m => m.ProgressReportModule) },
    
        { path: 'Reward', loadChildren: () => import('./Reward/Reward.module').then(m => m.RewardModule) },
    
        { path: 'Task', loadChildren: () => import('./Task/Task.module').then(m => m.TaskModule) },
    
        { path: 'TaskCategory', loadChildren: () => import('./TaskCategory/TaskCategory.module').then(m => m.TaskCategoryModule) },
    
        { path: 'TaskHistory', loadChildren: () => import('./TaskHistory/TaskHistory.module').then(m => m.TaskHistoryModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserReward', loadChildren: () => import('./UserReward/UserReward.module').then(m => m.UserRewardModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }