import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { SigninPage } from '../pages/signin/signin';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		LandingPage,
		SigninPage,
		MapPage,
		AboutPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		LandingPage,
		SigninPage,
		MapPage,
		AboutPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		Camera,
		Geolocation
	]
})
export class AppModule { }
