import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditVariablesPage } from '../editVariables/editVariables';
import { EditRulePage } from '../editRule/editRule';

@Component({
  selector: 'page-editMessages',
  templateUrl: 'editMessages.html'
})
export class EditMessagesPage {

  constructor(public navCtrl: NavController) {

  }

  public openEditVariables() {
    this.navCtrl.push(EditVariablesPage, { });
  }

  public openEditRule() {
    this.navCtrl.push(EditRulePage, { });
  }


}
