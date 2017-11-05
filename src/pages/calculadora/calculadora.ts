import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html',
})
export class CalculadoraPage {
  unidad;
  w;
  e;
  lux;
  final;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.w='';
    this.e='';
    this.lux='';
    this.final=0;
  }
resultado(res){
    this.unidad=res;
    document.getElementById('w').style.color="#000";
    document.getElementById('e').style.color="#000";
    document.getElementById('lux').style.color="#000";
    document.getElementById(res).style.color="#00eca8";
}
clear(res){
if(this.unidad=='w'){
  this.w='';
}else if(this.unidad=='e'){
  this.e='';
}else if(this.unidad=='lux'){
  this.lux='';
}
}
numero(numero){
  if(this.unidad=='w'){
    this.w=this.w+''+numero;
  }else if(this.unidad=='e'){
    this.e=this.e+''+numero;
  }else if(this.unidad=='lux'){
    this.lux=this.lux+''+numero;
  }
}
clearAll(){
  this.w='';
  this.e='';
  this.lux='';
  this.final=0;
}
finaly(){
  this.final=(this.w*100)/(this.e*this.lux)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }
}
