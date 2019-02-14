import { NgModule } from '@angular/core';
import { Shallow } from 'shallow-render';

import { ContactsListComponent } from './contacts-list.component';

@NgModule({
  declarations: [
    ContactsListComponent,
  ]
})
class TestModule {}

describe('ContactsListComponent', () => {
  let shallow: Shallow<ContactsListComponent>;

  beforeEach(() => {
    shallow = new Shallow(ContactsListComponent, TestModule);
  });

  it('should render a table with correct head section', async () => {
    const { find } = await shallow.render('<app-contacts-list [contacts]="contacts"></app-contacts-list>');
    const columns = find('table').nativeElement.querySelectorAll('thead th');

    expect(columns.length).toEqual(4);
  });

  it('should render a table with correct body', async () => {
    const contacts = [
      { id: 2, firstName: 'Jimmy', surname: 'Tester', email: 'Jimmy.Tester@example.com', groupId: 3 }
    ];
    const { find } = await shallow.render('<app-contacts-list [contacts]="contacts"></app-contacts-list>');
    const columns = find('table').nativeElement.querySelectorAll('tbody td');

    expect(columns.length).toEqual(4);
  });
});
