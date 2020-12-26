import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastrService: ToastrService,) { }

  options = {

    // disableTimeOut: true,
    positionClass:'toast-top-right',
    closeButton: true,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'success',
      warning: 'toast-warning'
    },
    easeTime:0
  }
  /**
   * `showAlert() to show toastr`
   * @param status 'info, success, warning, error'
   * @param title
   * @param message
   */
  show(status, title, message, options?) {
    options = (<any>Object).assign({}, this.options, options);
    title = title;
    message = message;
    this.toastrService[status](message, title , this.options);
  }

  
  /**
   * `clear()` to clear toastr
   */
  clear(){
    this.toastrService.clear();
    console.log('clear')
  }
}
