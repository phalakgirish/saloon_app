import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.page.html',
  styleUrls: ['./instagram.page.scss'],
})
export class InstagramPage implements OnInit {
  url: any;
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.openURL();
  }
  openURL(){
    // return this.url;
    var url = "https://www.instagram.com/dmn_salon/?hl=en";
    window.location.replace(url);
}

}
