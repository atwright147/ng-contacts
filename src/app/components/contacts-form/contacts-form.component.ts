import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { ContactService } from '../../services/contact.service';
import { NotificationService } from '../../services/notification.service';

import { IContact } from '../../interfaces/contact.interface';

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
  model: IContact = {
    id: null,
    firstName: '',
    surname: '',
    email: '',
    groupId: null,
  };

  constructor(
    private Contact: ContactService,
    private notification: NotificationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.routeParamsSub = this.route.params.subscribe(params => {
      this.contactId = params.contactId;
    });

    if (this.contactId) {
      this.Contact.getContactById(this.contactId).subscribe((data: IContact) => {
        // FROM: https://medium.com/@samichkhachkhi/setvalue-vs-patchvalue-angular-a64a55e912b8
        // this.contactForm.patchValue(data);  // when you want to load a partial payload
        this.model = data;  // when you can guarantee a full payload
      });
    }
  }

  onSubmit() {
    this.Contact.send(this.model).subscribe(
      console.info,  // tslint:disable-line no-console
      () => this.notification.error('Contact failed to save'),
      () => this.notification.success('Contact saved successfully'),

    );
  }

  ngOnDestroy() {
    this.routeParamsSub.unsubscribe();
  }
}
