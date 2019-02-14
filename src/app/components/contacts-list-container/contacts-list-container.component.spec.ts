import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListContainerComponent } from './contacts-list-container.component';

describe('ContactsListComponent', () => {
  let component: ContactsListContainerComponent;
  let fixture: ComponentFixture<ContactsListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
