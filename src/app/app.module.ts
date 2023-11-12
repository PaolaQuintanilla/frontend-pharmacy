import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule } from '@ngx-translate/core';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
