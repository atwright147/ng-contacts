import { NgModule, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { Shallow } from 'shallow-render';

import { ContactsListComponent } from './contacts-list.component';

@Component({
  template: ''
})
class DummyComponent {}

@NgModule({
  declarations: [
    ContactsListComponent,
  ],
  imports: [
    RouterTestingModule,
  ],
})
class TestModule {}

describe('ContactsListComponent', () => {
  let shallow: Shallow<ContactsListComponent>;

  beforeEach(() => {
    shallow = new Shallow(ContactsListComponent, TestModule);
  });

  it('should render a table with correct head section', async () => {
    const contacts = [
      { id: 42, firstName: 'Jimmy', surname: 'Tester', email: 'Jimmy.Tester@example.com', groupId: 3 }
    ];
    const { find } = await shallow.render({ bind: { contacts } });
    const columns = find('table').nativeElement.querySelectorAll('thead th');

    expect(columns.length).toEqual(4);
  });

  it('should link table row element to correct url', async () => {
    const contacts = [
      { id: 42, firstName: 'Jimmy', surname: 'Tester', email: 'Jimmy.Tester@example.com', groupId: 3 }
    ];
    const { find } = await shallow.render({ bind: { contacts } });
    const routerLink = find('table').nativeElement.querySelectorAll('tbody tr')[0].attributes['ng-reflect-router-link'].value;

    expect(routerLink).toEqual('contact,42');
  });

  it('should render a table with correct body', async () => {
    const contacts = [
      { id: 42, firstName: 'Jimmy', surname: 'Tester', email: 'Jimmy.Tester@example.com', groupId: 3 }
    ];
    const { find } = await shallow.render({ bind: { contacts } });
    const columns = find('table').nativeElement.querySelectorAll('tbody td');

    expect(columns.length).toEqual(4);
  });
});
