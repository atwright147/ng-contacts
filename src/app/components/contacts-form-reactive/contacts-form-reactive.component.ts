import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-form-reactive',
  templateUrl: './contacts-form-reactive.component.html',
  styleUrls: ['./contacts-form-reactive.component.scss']
})
export class ContactsFormReactiveComponent implements OnInit {
  // https://youtu.be/VLYc3ACWL-E
  contactForm: FormGroup;

  constructor(private Contact: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      groupId: new FormControl(),
    });
  }

  onSubmit() {
    this.Contact.send(this.contactForm.value).subscribe(console.info);
  }

}
