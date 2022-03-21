import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { google } from "google-maps";
declare var google
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
	selector: 'page-map',
	templateUrl: 'map.html',
})
export class MapPage {
	lat: number
	lng: number
	@ViewChild("map") mapElement: ElementRef;
	map: any;
	constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

	}

	ionViewDidLoad() {
		this.initMap()
	}
	initMap() {
		this.geolocation.getCurrentPosition().then((resp) => {
			this.lat = resp.coords.latitude
			this.lng = resp.coords.longitude


			let mapOptions: google.maps.MapOptions = {
				center: new google.maps.LatLng(this.lat, this.lng),
				zoom: 14,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

			new google.maps.Marker({
				position: new google.maps.LatLng(this.lat, this.lng),
				map: this.map,
			});
		})


	}

}
