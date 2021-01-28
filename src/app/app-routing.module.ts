import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
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
    loadChildren: () => import('./pages/closest-recycle-points/closest-recycle-points.module').then( m => m.ClosestRecyclePointsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
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
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/recycle-categories/recycle-categories.module').then( m => m.RecycleCategoriesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
   
    
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
