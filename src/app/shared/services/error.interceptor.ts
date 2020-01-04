import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { AppMessageService } from './app-message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor (private messenger: AppMessageService) {}

  intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                  let errorMessage = {
                    header: '',
                    body: ''
                  }
                   if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage.body = error.error.message;
                    } else {
                        // server-side error
                        //errorMessage.header = error.status.toString();
                        errorMessage.body = error.status.toString() + ": " + error.message;
                    }
                  this.messenger.showMessage(errorMessage.header, errorMessage.body);
                  return throwError(errorMessage.body);
                }));

    }
}
