import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.scss']
})
export class UserDetailsCardComponent implements OnInit {

  @Input('user') user: User;

  @Output('onClose') onClose = new EventEmitter<any>();
  @Output('onEdit') onEdit = new EventEmitter<any>();
  @Output('onDelete') onDelete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.onClose.emit(false);
  }

  edit(){
    this.onEdit.emit();
  }

  delete(){
    this.onDelete.emit();
  }

}
