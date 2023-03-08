import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'environments/environment';

export default {
  provide: FIREBASE_OPTIONS,
  useValue: environment.firebase_config,
};
