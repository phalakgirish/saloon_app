import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    HttpClientModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
   ],
  providers: [GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,],
  bootstrap: [AppComponent],
})
export class AppModule {}