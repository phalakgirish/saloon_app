import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.page.html',
  styleUrls: ['./managebooking.page.scss'],
})
export class ManagebookingPage implements OnInit {

  constructor(public router:Router,) { }

  ngOnInit() {
  }
  GotoBooking()
  {
    this.router.navigate(["booking"]);
    //window.location.href='https://partners.fresha.com';
    //window.open('https://partners.fresha.com', '_system');

  }
}
