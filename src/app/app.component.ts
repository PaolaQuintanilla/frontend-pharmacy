import { Component } from '@angular/core';

import { LanguageService } from './core/language/language.service';
import { FeatureFlagService } from './shared/feature-flag/feature-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeatureFlagService]
})
export class AppComponent {
  title = 'pharmacy';

  constructor(
    private translateService: LanguageService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.translateService.initialize();
  }
}
