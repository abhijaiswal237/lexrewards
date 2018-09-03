import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  showContainer: boolean = true;
  ngOnInit() {
    // var mapCanvas = document.getElementById("map");
    // // var mapCanvas = document.getElementById("mapmobile");
    // var mapOptions = {
    //   center: new google.maps.LatLng(28.6421896, 77.3671211), zoom: 15
    // };
    // var map = new google.maps.Map(mapCanvas, mapOptions);

    var mapProp = {

      center: new google.maps.LatLng(28.6421896, 77.3671211),

      zoom: 15,

      mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

  toggleSideBar(){
    this.showContainer = !this.showContainer;
  }
}
