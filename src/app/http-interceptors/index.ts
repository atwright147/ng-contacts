import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CorrelationIdInterceptor } from './correlation-id.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: CorrelationIdInterceptor, multi: true },
];
