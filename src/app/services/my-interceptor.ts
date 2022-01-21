import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req.clone({
      setHeaders: {
        'Content-Type' : 'multipart/form-data',
        'Accept'       : '*/*',
        'Authorization': `Bearer b7733b90b96b89bdba92bae535627d14896b35c7`
      },
                                
    });

    return next.handle(request);
  }
}