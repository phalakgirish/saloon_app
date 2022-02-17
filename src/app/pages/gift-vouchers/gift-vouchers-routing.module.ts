import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftVouchersPage } from './gift-vouchers.page';

const routes: Routes = [
  {
    path: '',
    component: GiftVouchersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftVouchersPageRoutingModule {}
