import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Array<any>;

  constructor(private Contact: ContactService) { }

  ngOnInit() {
    this.Contact.getContactsList().subscribe(data => this.contacts = data);
  }
}
