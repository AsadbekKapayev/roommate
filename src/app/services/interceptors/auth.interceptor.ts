import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../core/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.endsWith('/resend/email/verification') || req.url.endsWith('/user')) {
      let headers: HttpHeaders = req.headers;
      if (this.authService.hasTempSession()) {
        const token = this.authService.getTempSession();
        headers = headers.set('Authorization', `Bearer ${token}`);
        
        req = req.clone({
          headers,
        });

        return next.handle(req);
      }
    }

    let headers: HttpHeaders = req.headers;
    if (this.authService.hasSession()) {
      const token = this.authService.getSession();
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    req = req.clone({
      headers,
    });

    return next.handle(req);
  }

}
