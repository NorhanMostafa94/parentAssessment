import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input('user') user: User;

  @Input('activeCardId') activeCardId;

  @Output('onActivateCard') onActivateCard = new EventEmitter<any>();
  @Output('onEdit') onEdit = new EventEmitter<any>();
  @Output('onDelete') onDelete = new EventEmitter<any>();

  @Input('isCardActive') isCardActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateCard(user) {
    this.activeCardId = user.id;
    this.isCardActive = true;
    this.onActivateCard.emit(user);
  }

  edit(user){
    this.onEdit.emit(user);
  }

  delete(user){
    this.onDelete.emit(user);
  }

}
