import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  response: any;
  model = {
    firstName: '',
    surname: '',
    email: '',
    groupId: '',
  };

  constructor(private Contact: ContactService) {}

  ngOnInit() {}

  onSubmit() {
    console.info('Sending: ', this.model);
    this.Contact.send(this.model).subscribe(data => this.response = data);
  }
}
