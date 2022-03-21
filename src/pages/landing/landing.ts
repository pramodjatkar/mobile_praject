import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-landing',
	templateUrl: 'landing.html',
})
export class LandingPage {
	aboutPage = AboutPage
	mapPage = MapPage
	chatParams = {}
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.chatParams = this.navParams.get('item')

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LandingPage');
	}

}
