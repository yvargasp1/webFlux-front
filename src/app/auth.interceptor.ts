import { Injectable, inject } from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http'

import { Observable } from 'rxjs'
import { AuthService } from './services/auth.service'

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
   const authService  = inject(AuthService)
   const token = authService.getAuthToken()
   const authRequest = req.clone({
     setHeaders: {
       Authorization: `Bearer ${token}`,
     },
   })

    return next.handle(authRequest)
  }
}
