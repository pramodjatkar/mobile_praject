import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LandingPage } from '../landing/landing';
import { SigninPage } from '../signin/signin';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	uname = '';
	upass = '';
	jsonData = [
		{
			"userName": "pramod",
			"password": "abcdef",
			"email": "pramodjatkar1234@gmail.com",
			"name": "pramod",
			"middleName": "damodar",
			"lastName": "jatkar",
			"mobile": "7090904268"
		}
	];
	private todo: FormGroup;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController,
		private formBuilder: FormBuilder,
		public http: HttpClient
	) {

		if (JSON.parse(localStorage.getItem("userDetails")) == null) {
			this.jsonData = []
		} else {
			this.jsonData = JSON.parse(localStorage.getItem("userDetails"));
		}

	}

	loginUser(form: any) {

		if (this.jsonData.length > 0) {
			if (this.jsonData.some(person => person.userName == this.uname && person.password == this.upass)) {
				let toast = this.toastCtrl.create({
					message: 'Login successfully | Dashboard',
					duration: 3000
				});
				toast.present();
				var result = this.jsonData.filter(obj => {
					return obj.userName === this.uname && obj.password === this.upass
				})
				this.navCtrl.push(LandingPage, {
					item: result
				});

			} else {
				if (this.uname.length < 1) {
					let toast = this.toastCtrl.create({
						message: 'Username can\'t empty',
						duration: 3000
					});
					toast.present();
					return
				} else if (this.upass.length < 1) {
					let toast = this.toastCtrl.create({
						message: 'Password can\'t empty',
						duration: 3000
					});
					toast.present();
					return
				} else {
					let toast = this.toastCtrl.create({
						message: 'Invalid Username/Password',
						duration: 3000
					})
					toast.present();
				}
			}
		} else {
			let toast = this.toastCtrl.create({
				message: 'Please signin',
				duration: 3000
			});
			toast.present();
		}
	}
	navigate1() {
		this.navCtrl.setRoot(SigninPage)
	}

}
