import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditRulePage } from '../editRule/editRule';
import { EditFunctionBlockPage } from '../editFunctionBlock/editFunctionBlock';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

  constructor(public navCtrl: NavController) {

  }

  public openEditRule() {
    this.navCtrl.push(EditRulePage, { });
  }

  public openEditFunctionBlock() {
    this.navCtrl.push(EditFunctionBlockPage, { });
  }

}
