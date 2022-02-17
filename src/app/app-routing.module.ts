import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'loyalty',
    loadChildren: () => import('./pages/loyalty/loyalty.module').then( m => m.LoyaltyPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'fanwall',
    loadChildren: () => import('./pages/fanwall/fanwall.module').then( m => m.FanwallPageModule)
  },
 
  {
    path: 'managebooking',
    loadChildren: () => import('./pages/managebooking/managebooking.module').then( m => m.ManagebookingPageModule)
  },
  {
    path: 'gift-vouchers',
    loadChildren: () => import('./pages/gift-vouchers/gift-vouchers.module').then( m => m.GiftVouchersPageModule)
  },
  {
    path: 'qr-code/:id',
    loadChildren: () => import('./pages/qr-code/qr-code.module').then( m => m.QrCodePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./pages/loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'fanwall-post',
    loadChildren: () => import('./pages/fanwall-post/fanwall-post.module').then( m => m.FanwallPostPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'instagram',
    loadChildren: () => import('./pages/instagram/instagram.module').then( m => m.InstagramPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
