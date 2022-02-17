import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FanwallPage } from './fanwall.page';

const routes: Routes = [
  {
    path: '',
    component: FanwallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FanwallPageRoutingModule {}
