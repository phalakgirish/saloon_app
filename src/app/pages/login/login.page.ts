import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
    if(localStorage.getItem("status"))
    {
      this.router.navigate(['/homepage']);
    }
  }

  GoToLogin()
  {
    this.router.navigate(['/loginscreen']);
  }
  GoToSignUp()
  {
    this.router.navigate(['/signup']);
  }
}
