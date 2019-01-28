import * as uuid from 'uuid/v1';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class CorrelationIdInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const correlationId = uuid();

    const correlationIdReq = req.clone({
      headers: req.headers.set('X-Correlation-Id', correlationId)
    });

    return next.handle(correlationIdReq);
  }
}
