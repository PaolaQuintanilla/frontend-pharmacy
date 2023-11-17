import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translateService: TranslateService,
    ) {}

  initialize() {
    this.translateService.addLangs(['en', 'es']);
    this.translateService.setDefaultLang('en');

    const browserLang = this.translateService.getBrowserLang();
    const supportedLang = ['en', 'es'].includes(browserLang!) ? browserLang : 'en';
    this.translateService.use(supportedLang!);
  }
}