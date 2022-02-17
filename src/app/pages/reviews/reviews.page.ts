import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  url: SafeResourceUrl;
  //sanitizer: DomSanitizer;
   cleanSupportURL: any;
  constructor( private domSanitizer:DomSanitizer,public router:Router ) { }

  ngOnInit() {

    var url = "https://g.co/kgs/8yNTV2";
    window.location.replace(url);
  }
  getSafeUrl(url) {
		this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(url);		
  }
  GotoBooking()
  {
    //window.location.replace(url);
    //this.router.navigate(["https://g.co/kgs/8yNTV2"]);
    var url = "https://g.co/kgs/8yNTV2";
    this.getSafeUrl(url);
    window.location.replace(url);
    
  }

}
