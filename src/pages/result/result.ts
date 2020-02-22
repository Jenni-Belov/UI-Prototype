import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditPage } from '../edit/edit';


@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  constructor(public navCtrl: NavController) {

  }

  public openEdit() {
    this.navCtrl.push(EditPage, { });
  }

}
