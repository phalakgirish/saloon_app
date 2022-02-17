import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {
  validationUserMessage={
    email:[
      {type:"required",message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect. Try again!"}
    ],
    password:[
      {type:"required",message:"Please enter your Password"},
      {type:"minlength",message:"The Password must be at least 6 characters or more"}
    ]
  }
  validationFormUser:FormGroup;
  logData:object;

  constructor(
    public formbuilder:FormBuilder,
    public crud:CrudService,
    public loader:CommonService,
    public router:Router,
    public googlePlus:GooglePlus,
   //private fb:Facebook
       ) { }

  ngOnInit() {
   this.validationFormUser=this.formbuilder.group({
     email:new FormControl('',Validators.compose([
       Validators.required,
       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
     ])),
     password: new FormControl('',Validators.compose([
       Validators.required,
       Validators.minLength(6)
     ]))
   });
  }
  LoginUser(val: any)
  {
    //console.log(val);
    //console.log(val);
    this.crud.postData("login",val).subscribe((res)=>{
      //console.log(res);
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
        localStorage.setItem("user_data",JSON.stringify(res));
        localStorage.setItem('status','true')
        this.router.navigate(['homepage'])
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

  googleLogin()
  {
    
    this.googlePlus.getSigningCertificateFingerprint().then(result=>{
      console.log(result)
    })
    //show login prompt
    this.googlePlus.login({}).then(res => {
    console.log(res)
    this.logData=res
    this.loginData(this.logData)
  })
  .catch(err => console.error(err));
  }
  fblogin() {
  //   this.fb.login(['public_profile', 'user_friends', 'email'])
  // .then((res: FacebookLoginResponse) => (console.log('Logged into Facebook!', res)))
  // .catch(e => console.log('Error logging into Facebook', e));
  }

  loginData(data)
  {
    var GmailData=[
      {
        accessToken: data.accessToken,
        displayName: data.displayName,
        email: data.email,
        expires: 1637613619,
        expires_in: 2946,
        userId: data.userId
      }
    ]
    this.crud.postData("loginWithGoogle",{"gmailData":GmailData}).subscribe((res)=>{
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
        localStorage.setItem("user_data",JSON.stringify(res));
        localStorage.setItem('status','true')
        this.router.navigate(['homepage'])
      }
    },(err)=>{
      console.log(err);
    })
  }

}
function res(res: any): (reason: any) => PromiseLike<never> {
  throw new Error('Function not implemented.');
}

