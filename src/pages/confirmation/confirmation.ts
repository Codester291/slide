import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { BookRidePage } from '../book-ride/book-ride';

/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public status: StatusBar) {
    status.hide();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
    this.status.hide();
  }

  goHome(){
    this.navCtrl.push(HomePage);
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
  goBookRide(){
    this.navCtrl.push(BookRidePage);
  }
}
