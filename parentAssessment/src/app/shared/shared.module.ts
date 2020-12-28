import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertToastrComponent } from './components/alert-toastr/alert-toastr.component';
import { SvgAssetsComponent } from './components/svg-assets/svg-assets.component';
import { IconsComponent } from './components/icons/icons.component';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
  InputTextComponent,
  AlertToastrComponent,
  SvgAssetsComponent,
  IconsComponent,
  LoadingIndicatorComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      //  autoDismiss: false,
    }),
    ToastContainerModule,
    ModalModule.forRoot(),
    InfiniteScrollModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    AlertToastrComponent,
    IconsComponent,
    SvgAssetsComponent,
    InfiniteScrollModule,
    LoadingIndicatorComponent
  ],
  entryComponents:[
    AlertToastrComponent
  ]
})
export class SharedModule { }
