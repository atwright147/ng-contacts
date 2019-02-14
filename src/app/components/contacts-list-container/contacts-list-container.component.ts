import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-list-container',
  templateUrl: './contacts-list-container.component.html',
  styleUrls: ['./contacts-list-container.component.scss']
})
export class ContactsListContainerComponent implements OnInit {
  contacts: Array<any>;

  constructor(private Contact: ContactService) { }

  ngOnInit() {
    this.Contact
      .getContactsList()
      .subscribe(data => this.contacts = data);
  }
}
