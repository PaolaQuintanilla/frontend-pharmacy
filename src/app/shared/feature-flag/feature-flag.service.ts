import { Injectable } from '@angular/core';
import flagsmith from 'flagsmith';

flagsmith.init({
  environmentID: "3SdqsaLpEwoqc3ZwLEf7tn", //TODO: change this environmentID for Prod env.
  cacheFlags: true,
  enableAnalytics: false,
});

@Injectable()
export class FeatureFlagService {
  isFeatureOn(featureName: string) {
    return flagsmith.hasFeature(featureName);
  }
}