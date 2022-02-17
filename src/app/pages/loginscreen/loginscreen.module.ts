import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { LoginscreenPageRoutingModule } from './loginscreen-routing.module';

import { LoginscreenPage } from './loginscreen.page';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    LoginscreenPageRoutingModule
  ],
  declarations: [LoginscreenPage]
})
export class LoginscreenPageModule {}
