import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditMessagesPage } from '../editMessages/editMessages';

@Component({
  selector: 'page-editMicroDialog',
  templateUrl: 'editMicroDialog.html'
})
export class EditMicroDialogPage {

  constructor(public navCtrl: NavController) {

  }

  public openEditMessages() {
    this.navCtrl.push(EditMessagesPage, { });
  }

}
