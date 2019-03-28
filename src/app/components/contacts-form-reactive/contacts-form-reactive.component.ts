import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../services/contact.service';
import { NotificationService } from '../../services/notification.service';

import { IContact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contacts-form-reactive',
  templateUrl: './contacts-form-reactive.component.html',
  styleUrls: ['./contacts-form-reactive.component.scss']
})
export class ContactsFormReactiveComponent implements OnInit, OnDestroy {
  private routeParamsSub: any;
  // https://youtu.be/VLYc3ACWL-E
  contactForm: FormGroup;
  contactId: number;
  contact: any;

  constructor(
    private Contact: ContactService,
    private notification: NotificationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      groupId: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
    });

    this.routeParamsSub = this.route.params.subscribe(params => {
      this.contactId = params.contactId;
    });

    if (this.contactId) {
      this.Contact.getContactById(this.contactId).subscribe((data: IContact) => {
        // FROM: https://medium.com/@samichkhachkhi/setvalue-vs-patchvalue-angular-a64a55e912b8
        // this.contactForm.patchValue(data);  // when you want to load a partial payload
        this.contactForm.setValue(data);  // when you can guarantee a full payload
      });
    }
  }

  onSubmit() {
    this.Contact.send(this.contactForm.value).subscribe(
      console.info,  // tslint:disable-line no-console
      () => this.notification.error('Contact failed to save'),
      () => this.notification.success('Contact saved successfully'),
    );
  }

  ngOnDestroy() {
    this.routeParamsSub.unsubscribe();
  }

}
