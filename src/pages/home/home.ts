import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { StatusBar } from '@ionic-native/status-bar';
import anime from 'animejs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public status: StatusBar) {

  }
  ionViewDidEnter(){
    this.status.hide();
    anime({
      targets: '.logo',
      translateX: [
        { value: 100, duration: 1200},
        { value: 0, duration: 800}
      ],
      duration: 4000,
      elasticity: 600,
      rotation: 360
    });
  }

  goRegister(){
    const element =  document.querySelector('.reg')
    element.classList.add('animated', 'heartbeat')
    this.navCtrl.push(RegisterPage);
  }

}
