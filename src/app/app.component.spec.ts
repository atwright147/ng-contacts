import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsFormReactiveComponent } from './components/contacts-form-reactive/contacts-form-reactive.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './http-interceptors';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactsListComponent,
        ContactsDetailComponent,
        ContactsFormComponent,
        ContactsFormReactiveComponent,
        NotificationComponent,
        HeaderComponent,
        FooterComponent,
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        httpInterceptorProviders
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-contacts'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-contacts');
  });
});
