import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditMicroDialogPage } from '../editMicroDialog/editMicroDialog';
import { EditRulePage } from '../editRule/editRule';

@Component({
  selector: 'page-editFunctionBlock',
  templateUrl: 'editFunctionBlock.html'
})
export class EditFunctionBlockPage {

  constructor(public navCtrl: NavController) {

  }

  
  public openEditMicroDialog() {
    this.navCtrl.push(EditMicroDialogPage, { });
  }

  public openEditRule() {
    this.navCtrl.push(EditRulePage, { });
  }


}
