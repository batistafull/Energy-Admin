import { Component } from '@angular/core';
import { NavController, ActionSheetController  } from 'ionic-angular';
import { CalculadoraPage } from "../calculadora/calculadora";
import { NivelesPage } from "../niveles/niveles";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  public actionSheetCtrl:ActionSheetController) {

  }
  nivel(n){
      this.navCtrl.push(NivelesPage,{nivel:n})
  }
calc(){
 this.navCtrl.push(CalculadoraPage);
}
}
