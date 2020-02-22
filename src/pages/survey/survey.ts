import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {

  constructor(public navCtrl: NavController) {

  }
  public openResult() {
    this.navCtrl.push(ResultPage, { });
  }

}
