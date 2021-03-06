import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

/**
 * This class intercepts every outgoing API call and sends it to the proxy instead
 *
 * @export
 * @class APIInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `https://proxy02.swisscovery.network/${req.url}` });
    return next.handle(apiReq);
  }
}