import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';
@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.page.html',
  styleUrls: ['./loyalty.page.scss'],
})
export class LoyaltyPage implements OnInit {
  loyalty: any;
  userData: any;

  constructor(
    public crud:CrudService,
    public loader:CommonService,
    public router:Router) { 

      this.userData=JSON.parse(localStorage.getItem('user_data'));
    }

  ngOnInit() {
   this.LoyalityDetails();
  }

  ionViewDidEnter()
  {
    this.LoyalityDetails();
  }
  LoyalityDetails()
  {
    this.crud.postData("getLoyality",{"uid":this.userData['uid']}).subscribe((res)=>{
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
}
