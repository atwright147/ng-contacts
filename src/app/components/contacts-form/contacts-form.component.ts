import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

interface ContactFormModel {
  id?: number;
  firstName: string;
  surname: string;
  email: string;
  groupId?: string;
}

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  response: any;
  model: ContactFormModel = {
    firstName: '',
    surname: '',
    email: '',
    groupId: '',
  };

  constructor(private Contact: ContactService) {}

  ngOnInit() {
    this.Contact.getContactById(1).subscribe(data => {
      // FROM: https://medium.com/@samichkhachkhi/setvalue-vs-patchvalue-angular-a64a55e912b8
      // this.contactForm.patchValue(data);  // when you want to load a partial payload
      this.model = data;  // when you can guarantee a full payload
    });
  }

  onSubmit() {
    console.info('Sending: ', this.model);
    this.Contact.send(this.model).subscribe(console.info);
  }
}
