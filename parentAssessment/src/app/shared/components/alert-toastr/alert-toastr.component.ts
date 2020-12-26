import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastContainerDirective } from 'ngx-toastr/toastr/toast.directive';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

@Component({
  selector: 'app-alert-toastr',
  templateUrl: './alert-toastr.component.html',
  styleUrls: ['./alert-toastr.component.scss']
})
export class AlertToastrComponent implements OnInit {

  @ViewChild(ToastContainerDirective, {static: true}) toastContainer: ToastContainerDirective;

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;
  }

}
