import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy, iosTransitionAnimation} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from "@angular/common";
import {ComponentControllerModule} from "./modules/component-controller.module";
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      {
        mode: 'ios',
        loadingSpinner: 'crescent',
        navAnimation: iosTransitionAnimation
      }
    ),
    ComponentControllerModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
