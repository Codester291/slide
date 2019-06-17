import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { ConfirmationPage } from '../confirmation/confirmation';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public status: StatusBar) {
    status.hide();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.status.hide();
  }

  goHome(){
    this.navCtrl.push(HomePage);
  }
  goConfirmNumber(){
    this.navCtrl.push(ConfirmationPage)
  }

}
