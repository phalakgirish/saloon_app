import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/common.service';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  validationUserMessage={
    name:[
      {type:"required",message:"Please enter your full name"},
    ],
    mobile:[
      {type:"required",message:"Please enter your mobile number"},
      {type:"pattern", message:"The Mobile number entered is Incorrect."}
    ],
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

  constructor(
    public formbuilder:FormBuilder,
    public crud:CrudService,
    public loader:CommonService,
    public router:Router
    ) { }

  ngOnInit() {
   this.validationFormUser=this.formbuilder.group({
      name:new FormControl('',Validators.compose([
        Validators.required,
        ])),
      mobile:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{10,12}$')
      ])),
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
  SignUpUser(val: any)
  {
    //console.log(val);
    this.crud.postData("Register_user",val).subscribe(res=>{
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
        let msg={
          message: res['message'],
          duration: 3000,
        }
        this.loader.presentToast(msg)
        this.validationFormUser.reset();
        setTimeout(()=>{                           // <<<---using ()=> syntax
          this.router.navigate(['loginscreen'])
      }, 3000);
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
