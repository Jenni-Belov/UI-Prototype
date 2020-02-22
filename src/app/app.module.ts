import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SurveyPage } from '../pages/survey/survey';
// import { TabakPage } from '../pages/tabak/tabak';
import { ResultPage } from '../pages/result/result';
import { OverviewPage } from '../pages/overview/overview';
import { EditPage } from '../pages/edit/edit';
import { EditRulePage } from '../pages/editRule/editRule';
import { EditFunctionBlockPage } from '../pages/editFunctionBlock/editFunctionBlock';
import { EditMicroDialogPage } from '../pages/editMicroDialog/editMicroDialog';
import { EditMessagesPage } from '../pages/editMessages/editMessages';
import { EditVariablesPage } from '../pages/editVariables/editVariables';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SurveyPage,
    ResultPage,
    EditPage,
    OverviewPage,
    EditRulePage,
    EditFunctionBlockPage,
    EditMicroDialogPage,
    EditMessagesPage,
    EditVariablesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SurveyPage,
    ResultPage,
    EditPage,
    OverviewPage,
    EditRulePage,
    EditFunctionBlockPage,
    EditMicroDialogPage,
    EditMessagesPage,
    EditVariablesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
