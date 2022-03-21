import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-signin',
	templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {
	present = [];
	signupform: FormGroup;
	userData = { "userName": "", "password": "", "email": "", "name": "", "middleName": "", "lastName": "", "mobile": "" };

	imgUrl
	constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public camera: Camera) {
		if (JSON.parse(localStorage.getItem("userDetails")) == null) {
			this.present = []
		} else {
			this.present = JSON.parse(localStorage.getItem("userDetails"))
		}
	}




	ngOnInit() {
		let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
		this.signupform = new FormGroup({
			username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
			password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
			name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
			middleName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
			lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
			email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
			mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
		});
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad SigninPage');
	}

	signup() {
		// if (this.present.some(person => person.userName == this.userData.userName && person.password == this.userData.password)) {
		// 	let toast = this.toastCtrl.create({
		// 		message: 'user exists',
		// 		duration: 3000
		// 	})
		// 	toast.present();
		// } else {
		// 	this.present.push(this.userData)
		// 	localStorage.setItem("userDetails", JSON.stringify(this.present))
		// }

		console.log(this.userData)
		this.present.push(this.userData)
		localStorage.setItem("userDetails", JSON.stringify(this.present))

		this.navCtrl.setRoot(HomePage)
	}
	backPage() {
		this.navCtrl.setRoot(HomePage)
	}

}
