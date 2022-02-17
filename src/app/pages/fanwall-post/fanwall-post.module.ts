import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { FanwallPostPageRoutingModule } from './fanwall-post-routing.module';

import { FanwallPostPage } from './fanwall-post.page';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FanwallPostPageRoutingModule
  ],
  declarations: [FanwallPostPage]
})
export class FanwallPostPageModule {}
