import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FanwallPageRoutingModule } from './fanwall-routing.module';

import { FanwallPage } from './fanwall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FanwallPageRoutingModule
  ],
  declarations: [FanwallPage]
})
export class FanwallPageModule {}
