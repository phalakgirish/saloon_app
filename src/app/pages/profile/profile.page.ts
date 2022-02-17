import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  staff: any;

  constructor(  
    public crud:CrudService,
    public loader:CommonService,
    public router:Router
    ) { }

  ngOnInit() {
    this.GetStaff()
  }
  GetStaff()
  {
    
    this.crud.getData("getStaff").subscribe((res)=>{
      //console.log(res);
      if(res[0]['status']=='401')
      {
        let msg={
          message: res['message'],
          duration: 3000,
        }
        this.loader.presentToast(msg)
      }
    else{
       this.staff=res;
      }
    },
      err=>{
       // console.log(err);
        let msg={
          message: 'Somethig wrong please try again.',
          duration: 3000,
        }
        this.loader.presentToast(msg)
      }
    )
  }
}
