import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {
  w;
  m;
  lux;
  res;
  res1;
  res2;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }
  resultado(){
    if(this.w && this.m && this.lux){
    this.res1 = this.w*100;
    this.res2 = this.m*this.lux;
    this.res = this.res1/this.res2;
    }else{
      let toast = this.toastCtrl.create({
        message: 'Debes llenar todo los campos',
        duration: 3000
      });
      toast.present();
    }
    
  }
}
