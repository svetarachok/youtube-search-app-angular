import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { USER_KEY } from '../../utils/constants';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    const newReq = req.clone({
      params: req.params.append('key', `${USER_KEY}`),
    });
    return next.handle(newReq);
  }
}