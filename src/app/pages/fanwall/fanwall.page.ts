import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';
@Component({
  selector: 'app-fanwall',
  templateUrl: './fanwall.page.html',
  styleUrls: ['./fanwall.page.scss'],
})
export class FanwallPage implements OnInit {
  
  userData: any;
  msg: any;
  uid: any;

  constructor( 
    public crud:CrudService,
    public loader:CommonService,
    public router:Router
    ) {
      this.userData=JSON.parse(localStorage.getItem("user_data"));
      this.uid=this.userData.uid
     //console.log(this.userData);
   }

  ngOnInit() {
    this.GetPost();
  }
  GetPost()
     {
       
       this.crud.getData("getfan_Comments").subscribe((res)=>{
         console.log(res);
         if(res[0]['status']=='401')
         {
           let msg={
             message: res['message'],
             duration: 3000,
           }
           this.loader.presentToast(msg)
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
