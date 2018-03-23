import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modulos',
  templateUrl: 'modulos.html',
})
export class ModulosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  // If we navigated to this page, we will have an item available as a nav param

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModulosPage');
  }

}


