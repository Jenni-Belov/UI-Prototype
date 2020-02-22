import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SurveyPage } from '../survey/survey';
import { OverviewPage } from '../overview/overview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public openSurvey() {
    this.navCtrl.push(SurveyPage, { });
  }

  public openOverview() {
    this.navCtrl.push(OverviewPage, { });
  }
}
