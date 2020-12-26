import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderNavComponent
  ]
})
export class CoreModule { }
