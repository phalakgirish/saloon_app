import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FanwallPostPage } from './fanwall-post.page';

const routes: Routes = [
  {
    path: '',
    component: FanwallPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FanwallPostPageRoutingModule {}
