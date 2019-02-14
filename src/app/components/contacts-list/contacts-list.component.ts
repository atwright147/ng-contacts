import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @Input()
  contacts: any;

  ngOnInit() {
    console.info(this.contacts)
  }
}
