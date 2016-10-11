import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, forwardRef } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { AppComponent } from './app/app.component';

import { UpgradeAdapter } from '@angular/upgrade';

if (environment.production) {
  enableProdMode();
}

declare var angular: any;

var ng2 = new UpgradeAdapter(forwardRef(() => AppModule));
var ng1 = angular.module('ng1');
ng1.directive('appRoot', ng2.downgradeNg2Component(AppComponent));
ng2.bootstrap(document.body, ['ng1']);