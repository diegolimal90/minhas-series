import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/Storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SeriesProvider } from '../providers/series/series';
import { LoginProvider } from '../providers/login/login';
import { DatePipe } from '@angular/common';
import { FormPage } from '../pages/form/form';
import { EditPage } from '../pages/edit/edit';
import { ViewPage } from '../pages/view/view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FormPage,
    EditPage,
    ViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FormPage,
    EditPage,
    ViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    SeriesProvider,
    LoginProvider
  ]
})
export class AppModule {}
