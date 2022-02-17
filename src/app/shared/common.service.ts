import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLoading = false;
  dtObj: any;
  public data_trans_object = new Subject();
  public data_trans_object2 = new Subject();
  studentData: any;
  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    private plt:Platform
    ) { }
  setData(dtObj)
  {
    this.dtObj=dtObj
  }
  getData()
  {
    if(this.dtObj=='null' || this.dtObj=='undefined')
    return 0;
    return this.dtObj
  }
   /*Loader start*/
   async present(msg) {
    this.isLoading = true;
    return await this.loadingController.create({
      message:msg,
      duration: 3000
    }).then(a => {
      a.present().then(() => {
        
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
  
  /*Loader End*/

  /*Toast start*/
  async presentToast(data) {
    const toast = await this.toastController.create(data);
    toast.present();
  }
  /*Toast End*/
  /*Alert start*/
  async presentAlert(data) {
    const alert = await this.alertController.create(data);

    await alert.present();
  }
  /*Alert End*/
}
