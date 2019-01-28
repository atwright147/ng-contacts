import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { httpInterceptorProviders } from './index';
import { CorrelationIdInterceptor } from './correlation-id.interceptor';

fdescribe('AppComponent', () => {
  it(`should have as title 'ng-contacts'`, () => {
    const expected: Array<any> = [
      { provide: HTTP_INTERCEPTORS, useClass: CorrelationIdInterceptor, multi: true },
    ];
    expect(httpInterceptorProviders).toEqual(expected);
  });
});
