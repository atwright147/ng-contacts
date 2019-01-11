import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsFormReactiveComponent } from './contacts-form-reactive.component';

describe('ContactsFormReactiveComponent', () => {
  let component: ContactsFormReactiveComponent;
  let fixture: ComponentFixture<ContactsFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
