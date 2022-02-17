import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { CrudService } from 'src/app/shared/crud.service';
declare var google :any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  map:any;
  @ViewChild('map',{read:ElementRef,static:false}) mapRef:ElementRef;
  infoWindows:any =[];
  markers:any = [
    {
      title:'Nation Art gallery',
      latitude:'-17.824991',
      longitude:'31.049295'
    }
  ];
  Storetime: any;


  constructor( public crud:CrudService,
    public loader:CommonService,
    public router:Router
    ) { }

  ngOnInit() {
    this.crud.getData("getStore_time").subscribe((res)=>{
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
        this.Storetime=res['time'];
      }
    })
  }
  addMarkersToMap(markers)
  {
    for(let marker of markers)
    {
      let position = new google.maps.LatLng(marker.latitude,marker.longitude);
      let mapMarker = new google.maps.Marker({
        position:position,
        title:marker.title,
        latitude:marker.latitude,
        longitude:marker.longitude
      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }
  addInfoWindowToMarker(marker)
  {
    let infoWindowContent= '<div id="content">'+ '<h2 id="firstHeading" class="firstHeading">'+marker.title+'</h2>'+
                            '<p> Latitude:'+marker.latitude+'</p>'+
                            '<p> LongitudeL'+marker.longitude+'</p>'+
                            '</div>';
    let infoWindow = new google.maps.infoWindow({
      content:infoWindowContent
    })                        
    marker.addListener('click',()=>{
      this.closeAllInfoWindow();
      infoWindow.open(this.map,marker);
    });
    this.infoWindows.push(infoWindow);
  }
  closeAllInfoWindow()
  {
    for(let window of this.infoWindows)
    {
      window.close();
    }
  }
  ionViewDidEnter()
  {
    this.showMap();
  }
  showMap()
  {
    const location = new google.maps.LatLng(-17.824858,31.053028);
    const options = {
      center:location,
      zoom:15,
      disableDefaultUI:true
    }
    this.map=new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarkersToMap(this.markers)
  }  
}
