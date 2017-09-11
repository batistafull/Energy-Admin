import { Component } from '@angular/core';
import { NavController, ActionSheetController,ModalController  } from 'ionic-angular';
import { CalculadoraPage } from "../calculadora/calculadora";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  public actionSheetCtrl:ActionSheetController,
public modalCtrl: ModalController) {

  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Niveles',
      buttons: [
        {
          text: 'Nivel 1',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Nivel 2',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Nivel 3',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Nivel 4',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
calc(){
 let modal = this.modalCtrl.create(CalculadoraPage);
  modal.present();
}
}
