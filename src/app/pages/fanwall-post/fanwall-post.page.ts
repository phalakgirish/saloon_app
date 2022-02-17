import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';
@Component({
  selector: 'app-fanwall-post',
  templateUrl: './fanwall-post.page.html',
  styleUrls: ['./fanwall-post.page.scss'],
})
export class FanwallPostPage implements OnInit {
  validationUserMessage={
    comments:[
      {type:"required",message:"Please enter your comment"},
     
    ],
   
  }
  validationFormUser:FormGroup;
  userData: any;
  constructor(
    public formbuilder:FormBuilder,
    public crud:CrudService,
    public loader:CommonService,
    public router:Router,
   
    ) {
      this.userData=JSON.parse(localStorage.getItem("user_data"));
      //console.log(this.userData.uid);
     }


    ngOnInit() {
      this.validationFormUser=this.formbuilder.group({
        comments:new FormControl('',Validators.compose([
          Validators.required,
        ])),
       
      });
     }
     SubmitPost(val: any)
     {
       var formData={
         "post_comments":val,
         "post_uid":this.userData.uid
       }
       this.crud.postData("fanpost",formData).subscribe((res)=>{
         console.log(res);
         if(res['status']=='401')
         {
           let msg={
             message: res['message'],
             duration: 3000,
           }
           this.loader.presentToast(msg)
         }
   
         if(res['status']=='200')
         {
          this.router.navigate(['fanwall'])
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
