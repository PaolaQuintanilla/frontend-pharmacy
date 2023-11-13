import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule } from '@ngx-translate/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RemoveIfFeatureOff } from './shared/feature-flag/remove-if-feature-off';

@NgModule({
  declarations: [
    AppComponent,
    RemoveIfFeatureOff
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    TranslateModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
