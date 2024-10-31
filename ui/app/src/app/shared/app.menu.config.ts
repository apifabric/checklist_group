import { MenuRootItem } from 'ontimize-web-ngx';

import { CategoryCardComponent } from './Category-card/Category-card.component';

import { DailyGoalCardComponent } from './DailyGoal-card/DailyGoal-card.component';

import { DashboardCardComponent } from './Dashboard-card/Dashboard-card.component';

import { FeedbackCardComponent } from './Feedback-card/Feedback-card.component';

import { PriorityLevelCardComponent } from './PriorityLevel-card/PriorityLevel-card.component';

import { ProgressReportCardComponent } from './ProgressReport-card/ProgressReport-card.component';

import { RewardCardComponent } from './Reward-card/Reward-card.component';

import { TaskCardComponent } from './Task-card/Task-card.component';

import { TaskCategoryCardComponent } from './TaskCategory-card/TaskCategory-card.component';

import { TaskHistoryCardComponent } from './TaskHistory-card/TaskHistory-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserRewardCardComponent } from './UserReward-card/UserReward-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Category', name: 'CATEGORY', icon: 'view_list', route: '/main/Category' }
    
        ,{ id: 'DailyGoal', name: 'DAILYGOAL', icon: 'view_list', route: '/main/DailyGoal' }
    
        ,{ id: 'Dashboard', name: 'DASHBOARD', icon: 'view_list', route: '/main/Dashboard' }
    
        ,{ id: 'Feedback', name: 'FEEDBACK', icon: 'view_list', route: '/main/Feedback' }
    
        ,{ id: 'PriorityLevel', name: 'PRIORITYLEVEL', icon: 'view_list', route: '/main/PriorityLevel' }
    
        ,{ id: 'ProgressReport', name: 'PROGRESSREPORT', icon: 'view_list', route: '/main/ProgressReport' }
    
        ,{ id: 'Reward', name: 'REWARD', icon: 'view_list', route: '/main/Reward' }
    
        ,{ id: 'Task', name: 'TASK', icon: 'view_list', route: '/main/Task' }
    
        ,{ id: 'TaskCategory', name: 'TASKCATEGORY', icon: 'view_list', route: '/main/TaskCategory' }
    
        ,{ id: 'TaskHistory', name: 'TASKHISTORY', icon: 'view_list', route: '/main/TaskHistory' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserReward', name: 'USERREWARD', icon: 'view_list', route: '/main/UserReward' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CategoryCardComponent

    ,DailyGoalCardComponent

    ,DashboardCardComponent

    ,FeedbackCardComponent

    ,PriorityLevelCardComponent

    ,ProgressReportCardComponent

    ,RewardCardComponent

    ,TaskCardComponent

    ,TaskCategoryCardComponent

    ,TaskHistoryCardComponent

    ,UserCardComponent

    ,UserRewardCardComponent

];