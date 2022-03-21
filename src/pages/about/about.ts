import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-about',
	templateUrl: 'about.html',
})
export class AboutPage {
	imgUrl
	public Data: any

	modalName = "pramod"

	constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, private ActionSheet: ActionSheetController) {
		this.Data = navParams.data
		console.log(navParams.data)
		console.log(typeof (navParams.data))
		console.log(navParams.data.firstName)
	}

	ionViewDidLoad() {

	}
	async showActionSheet() {
		var actionsheet = this.ActionSheet.create({
			title: "Add Photo",
			buttons: [
				{
					text: "Take from Gallery",
					handler: () => {
						this.camera.getPicture({
							sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
							destinationType: this.camera.DestinationType.FILE_URI

						}).then((res) => {
							this.imgUrl = 'data:image/jpeg;base64,' + res;
						}).catch(e => {
							console.log(e)
						})
					}
				}, {
					text: "Take Photo on Camera",
					handler: () => {
						this.camera.getPicture({
							sourceType: this.camera.PictureSourceType.CAMERA,
							destinationType: this.camera.DestinationType.FILE_URI
						}).then((res) => {
							this.imgUrl = 'data:image/jpeg;base64,' + res;
						}).catch(e => {
							console.log(e)
						})
					}
				}, {
					text: "Cancel"

				}
			]
		});
		actionsheet.present();
	}



}
