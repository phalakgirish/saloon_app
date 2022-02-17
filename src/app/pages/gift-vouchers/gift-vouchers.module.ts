import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftVouchersPageRoutingModule } from './gift-vouchers-routing.module';

import { GiftVouchersPage } from './gift-vouchers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftVouchersPageRoutingModule
  ],
  declarations: [GiftVouchersPage]
})
export class GiftVouchersPageModule {}
