import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { VIDEOS_URL } from '../../utils/constants';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    const newReq = req.clone({
      url: `${VIDEOS_URL}${req.url}`,
    });
    return next.handle(newReq);
  }
}