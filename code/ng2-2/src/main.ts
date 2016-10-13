import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, forwardRef, NgModule } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

import { UpgradeAdapter } from '@angular/upgrade';

if (environment.production) {
  enableProdMode();
}

declare var angular: any;

let ng2 = new UpgradeAdapter(forwardRef(() => AppModule));
var ng1 = angular.module('ng1');
ng1.directive('appRoot', ng2.downgradeNg2Component(AppComponent));

const SequenceComponent = ng2.upgradeNg1Component('sequenceComponent');

@NgModule({
  declarations: [
    AppComponent,
    SequenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

ng2.bootstrap(document.body, ['ng1']);