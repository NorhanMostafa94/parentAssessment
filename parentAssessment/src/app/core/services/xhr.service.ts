import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';


@Injectable({
  providedIn: 'root'
})
export class XhrService {

  constructor(private httpClient:HttpClient,
    private router:Router,
    private alertService:AlertService) { }
  
  defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Allow-Origin': '*',
    'Access-Control-Allow-Origin': '*',
    'LanguageCode': 'en',
    'Authorization': localStorage.getItem('token') ? ('bearer ' + JSON.parse(localStorage.getItem('token'))) : ''
  };

  defaultOptions = {
    url: environment.backendURL,
    method: 'POST',
    params: null,
    headers: new HttpHeaders({}),
    responseType: 'json'
  };

  public getFinalParams(options: any): any {
      this.defaultOptions.headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Allow-Origin': '*',
        'Access-Control-Allow-Origin': '*',
        'LanguageCode': 'en',
        'Authorization': localStorage.getItem('token') ? ('bearer ' + JSON.parse(localStorage.getItem('token')).token) : ''
      });

    const newRequestOptions: any = (<any>Object).assign(
      {},
      this.defaultOptions,
      options
    );
    let finalRequestOptions: any;
    finalRequestOptions = {};
    finalRequestOptions.method = newRequestOptions.method;
    finalRequestOptions.url = this.constructUrl(newRequestOptions.url, finalRequestOptions.method, newRequestOptions.params);
    finalRequestOptions.body = newRequestOptions.body;
    finalRequestOptions.options = {
      headers: newRequestOptions.headers,
      params: newRequestOptions.params,
      responseType: newRequestOptions.responseType,
      observe: 'response',
      withCredentials: false
    };
    finalRequestOptions.responseParent = newRequestOptions.responseParent;
    return finalRequestOptions;
  }

  public constructUrl(url: string, method, params: any): string {
    let finalUrl = this.defaultOptions.url + url
    return finalUrl;
  }

  call(params){
    return new Observable((observer) => {
      let finalParams = this.getFinalParams(params);
      const req = new HttpRequest(
        finalParams.method,
        finalParams.url,
        finalParams.body,
        finalParams.options
      );
  
      const request = this.httpClient.request(req);
      let rejection: string;
      if (navigator.onLine) {
        request.subscribe(
          (event: HttpEvent<any>) => {
            if (event.type === HttpEventType.Response) {
              const body = event.body;
              observer.next(body);
              
            }
          },
          (error: HttpErrorResponse) => {
  
            // this.loaderService.hide();
  
            if (error.error instanceof ErrorEvent) {
  
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              if (error.status === 0) {
                //rejection = Rejection.Offline;
              }
              else if (error.status === 401) {
                //rejection = Rejection.Session;
                //this.sessionRejected.emit();
                // this.alertToastrService.clear();
  
                // this.alertToastrService.show('warning', 'Warning', 'Your session has been expired, Please login');
                localStorage.clear();
                this.router.navigate(['/login'])
              }
              else if (error.status === 400) {
                this.alertService.show('error', 'Error', error.error.error)
              }
              else if (error.status == 500) {
                // this.alertService.show('error', 'root.alert.error', error.error.ErrorMessage)
  
              }
              else {
                //rejection = Rejection.Technical;
              }
            }
            observer.error(rejection);
          }
        )
      }
      else {
        // this.loaderService.hide();
        // // if (!this.isAlertWarning) {
        // this.alertToastrService.clear()
        // this.alertToastrService.show('warning', 'No Internet Connection', 'Please check your internet connection & try again.')
        // this.isAlertWarning = true;
        // }
      }
    });

  }

}
