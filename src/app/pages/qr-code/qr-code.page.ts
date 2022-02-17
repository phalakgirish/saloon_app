import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  encodeData: any;
  scannedData: {};
 barcodeScannerOptions: BarcodeScannerOptions;
  loyalty: Object;
  userData: any;
  constructor(
    public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    private activate:ActivatedRoute,
    public barcodeScanner: BarcodeScanner
    ) {
    this.userData=JSON.parse(localStorage.getItem('user_data'));
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    
  

  }
  
  
  ngOnInit() {
  }
  ionViewDidEnter() {
    var proId=this.activate.snapshot.params.id
    this.crud.postData("getLoyality_details",{"program_id":proId}).subscribe((res)=>{
      //console.log(res);
      if(res['status']=='401')
      {
        let msg={
          message: res['message'],
          duration: 3000,
        }
        this.loader.presentToast(msg)
      }
      else{
       
        this.loyalty=res;
      }
    })
  }  
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        //alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData.text;
        var uid=this.userData['uid'];
        this.crud.postData("reedem_loyality",{"loyalty_code":barcodeData.text,"uid":uid}).subscribe((res)=>{
          console.log(res);
          let msg={
            message: res['message'],
            duration: 3000,
          }
          this.loader.presentToast(msg)
          this.router.navigate(['homepage'])
        },(err)=>{
          console.log(err);
        })
        
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
}
