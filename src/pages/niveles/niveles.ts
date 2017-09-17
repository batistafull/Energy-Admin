import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NivelesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-niveles',
  templateUrl: 'niveles.html',
})
export class NivelesPage {
  nivel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.nivel=this.navParams.get('nivel');
  
  }
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  public barChartLabels:string[] = ['Enero','Febrero','Marzo',
                                    'Abril','Mayo','Junio',
                                    'Julio','Agosto','Septiembre',
                                    'Octubre','Noviembre','Diciembre'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 89, 45, 32, 76, 90], label: '2017'},
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NivelesPage');
  }

}
