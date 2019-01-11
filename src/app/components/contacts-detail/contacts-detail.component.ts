import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {
  contact: any;
  contactId: number;
  sub: any;

  constructor(
    private Contact: ContactService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.contactId = params.contactId;
    });

    this.Contact.getContactById(this.contactId).subscribe(data => this.contact = data);
  }

}
