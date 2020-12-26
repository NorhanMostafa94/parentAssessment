import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertToastrComponent } from './components/alert-toastr/alert-toastr.component';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
  InputTextComponent,
  AlertToastrComponent
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      //  autoDismiss: false,
    }),
    ToastContainerModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    AlertToastrComponent
  ],
  entryComponents:[
    AlertToastrComponent
  ]
})
export class SharedModule { }
