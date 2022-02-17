import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';  
 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;  
  constructor(   
    private platform: Platform,  
    private router:Router
    
  ) {   
    if(localStorage.getItem("status"))
    {
      this.router.navigate(['/homepage']);
    }
    this.sideMenu();  
    this.initializeApp();  
  }  
  initializeApp() {  
    this.platform.ready().then(() => {  
       
      if(localStorage.getItem("status"))
      {
        this.router.navigate(['/homepage']);
      }
    });  
  } 
  sideMenu() {  
    this.navigate =   
    [  
        { 
        title : 'Location',
        url   : '/apps',
        icon  : 'location-outline' 
        },
      { 
        title : 'Book',  
        url   : '/book',  
        icon  : 'book'  
      },   
      {  
        title : 'Manage Booking',  
        url   : '/paint',  
        icon  : 'calendar-outline'   
      },  
      {  
        title : 'Gift Vouchers',  
        url   : '/contacts',  
        icon  : 'contacts'  
      },   
      {
          title : 'Loyalty',
          url   : '/facebook.com',
          icon  : 'logo-facebook'
      },
      {
        title : 'Staff Profile',
        url   : '/facebook.com',
        icon  : 'logo-facebook'
      },
      {
        title : 'Reviews',
        url   : '/facebook.com',
        icon  : 'calendar-outline'
      },
      {
        title : 'Instagram',
        url   : '/facebook.com',
        icon  : 'logo-facebook'
      },
      {
        title : 'Fan Wall',
        url   : '/facebook.com',
        icon  : 'chatbubble-ellipses-outline'
    },
    ];  
  } 
  logout()
  {
    location.href="";
    localStorage.clear();
    
  } 
}
