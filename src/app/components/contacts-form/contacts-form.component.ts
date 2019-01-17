import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../services/contact.service';
import { FormGroup } from '@angular/forms';

import { ContactFormModel } from '../../interfaces/contact-form-model.interface';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit, OnDestroy {
  private routeParamsSub: any;
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
    this.routeParamsSub = this.route.params.subscribe(params => {
      this.contactId = params.contactId;
    });

    if (this.contactId) {
      this.Contact.getContactById(this.contactId).subscribe((data: ContactFormModel) => {
        // FROM: https://medium.com/@samichkhachkhi/setvalue-vs-patchvalue-angular-a64a55e912b8
        // this.contactForm.patchValue(data);  // when you want to load a partial payload
        this.model = data;  // when you can guarantee a full payload
      });
    }
  }

  onSubmit() {
    console.info('Sending: ', this.model);  // tslint:disable-line no-console
    this.Contact.send(this.model).subscribe(console.info);  // tslint:disable-line no-console
  }

  ngOnDestroy() {
    this.routeParamsSub.unsubscribe();
  }
}
