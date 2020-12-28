import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsCardComponent } from './components/user-details-card/user-details-card.component';


@NgModule({
  declarations:
    [
      UsersListComponent,
      UserCardComponent,
      UserDetailsCardComponent
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports:[
    UserCardComponent
  ]
})
export class UserModule { }
