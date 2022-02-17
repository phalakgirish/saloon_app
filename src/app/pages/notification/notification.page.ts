import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  msg: Object;
  notification: Object;

  constructor(public crud:CrudService,public loader:CommonService,
    public router:Router) { }

  ngOnInit() {
    this.getNotification()
  }

  getNotification()
  {
    this.crud.getData("get_notification").subscribe((res)=>{
     // console.log(res);
      if(res[0]['status']=='200')
      {
        this.notification=res;
        // let msg={
        //   message: res['message'],
        //   duration: 3000,
        // }
        // this.loader.presentToast(msg)
      }
    else{
       this.msg=res;
      }
    },
      err=>{
        console.log(err);
        let msg={
          message: 'Somethig wrong please try again.',
          duration: 3000,
        }
        this.loader.presentToast(msg)
      }
    )
  }

}
