import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../services/contact.service';
import { FormGroup } from '@angular/forms';

interface ContactFormModel {
  id?: number;
  firstName: string;
  surname: string;
  email: string;
  groupId?: number;
}

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit, OnDestroy {
  private sub: any;
  response: any;
  contactForm: FormGroup;
  contactId: number;
  model: ContactFormModel = {
    id: null,
    firstName: '',
    surname: '',
    email: '',
    groupId: null,
  };

  constructor(
    private Contact: ContactService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.contactId = params.contactId;
    });

    if (this.contactId) {
      this.Contact.getContactById(1).subscribe(data => {
        // FROM: https://medium.com/@samichkhachkhi/setvalue-vs-patchvalue-angular-a64a55e912b8
        this.contactForm.patchValue(data);  // when you want to load a partial payload
        // this.model = data;  // when you can guarantee a full payload
      });
    }
  }

  onSubmit() {
    console.info('Sending: ', this.model);
    this.Contact.send(this.model).subscribe(console.info);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
