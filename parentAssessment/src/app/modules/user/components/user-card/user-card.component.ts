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

  @Input('isCardActive') isCardActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateCard(id) {
    this.activeCardId = id;
    this.isCardActive = true;
    this.onActivateCard.emit(id);
  }

}
