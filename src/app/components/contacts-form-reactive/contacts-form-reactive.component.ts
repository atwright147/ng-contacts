import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-form-reactive',
  templateUrl: './contacts-form-reactive.component.html',
  styleUrls: ['./contacts-form-reactive.component.scss']
})
export class ContactsFormReactiveComponent implements OnInit {
  // https://youtu.be/VLYc3ACWL-E
  contactForm: FormGroup;
  contact: any;

  constructor(private Contact: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      groupId: new FormControl(),
    });

    this.Contact.getContactById(1).subscribe(data => {
      // FROM: https://medium.com/@samichkhachkhi/setvalue-vs-patchvalue-angular-a64a55e912b8
      // this.contactForm.patchValue(data);  // when you want to load a partial payload
      this.contactForm.setValue(data);  // when you can guarantee a full payload
    });
  }

  onSubmit() {
    this.Contact.send(this.contactForm.value).subscribe(console.info);
  }

}
