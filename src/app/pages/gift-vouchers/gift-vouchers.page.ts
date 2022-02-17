import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-vouchers',
  templateUrl: './gift-vouchers.page.html',
  styleUrls: ['./gift-vouchers.page.scss'],
})
export class GiftVouchersPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  GotoBooking()
  {
    //this.router.navigate(["https://partners.fresha.com/"]);
    //window.location.href='https://partners.fresha.com';
    //window.open('https://partners.fresha.com', '_system');
    // this.router.navigate(["https://www.fresha.com/book-now/dmn-salon-xqhjobd4/vouchers?pId=384297"]);
    window.open("https://www.w3schools.com/php/",'_system', 'location=yes');
  }
}
