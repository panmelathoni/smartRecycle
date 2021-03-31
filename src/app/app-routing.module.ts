import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'closest',
    loadChildren: () => import('./pages/closest-recycle-points/closest-recycle-points.module').then( m => m.ClosestRecyclePointsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup-email',
    loadChildren: () => import('./pages/signup-email/signup-email.module').then( m => m.SignupEmailPageModule)
  },
  {
    path: 'signup-address',
    loadChildren: () => import('./pages/signup-address/signup-address.module').then( m => m.SignupAddressPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/recycle-categories/recycle-categories.module').then(m => m.RecycleCategoriesPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: ':recycleCategoryId',
        loadChildren: () => import('./pages/recycle-category-materials/recycle-category-materials.module').then(m => m.RecycleCategoryMaterialsPageModule),
        canActivate: [AuthGuard]
      }
    ]
  },   {
    path: 'email-confirm',
    loadChildren: () => import('./pages/email-confirm/email-confirm.module').then( m => m.EmailConfirmPageModule)
  },
  {
    path: 'rgpd',
    loadChildren: () => import('./pages/rgpd/rgpd.module').then( m => m.RgpdPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recycle-bonus-options',
    loadChildren: () => import('./pages/recycle-bonus-options/recycle-bonus-options.module').then( m => m.RecycleBonusOptionsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recycle-bonus-history',
    loadChildren: () => import('./pages/recycle-bonus-history/recycle-bonus-history.module').then( m => m.RecycleBonusHistoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recycle-available-materials',
    loadChildren: () => import('./pages/recycle-available-materials/recycle-available-materials.module').then( m => m.RecycleAvailableMaterialsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule),
    canActivate: [AuthGuard]
  },  {
    path: 'my-responsible-government',
    loadChildren: () => import('./pages/my-responsible-government/my-responsible-government.module').then( m => m.MyResponsibleGovernmentPageModule)
  }



 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
   
    
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
