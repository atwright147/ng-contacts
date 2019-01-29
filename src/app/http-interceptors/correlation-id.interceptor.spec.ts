import { TestBed } from '@angular/core/testing';

import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from '../components/contacts-detail/contacts-detail.component';
import { ContactsFormComponent } from '../components/contacts-form/contacts-form.component';
import { ContactsFormReactiveComponent } from '../components/contacts-form-reactive/contacts-form-reactive.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

import { CorrelationIdInterceptor } from './correlation-id.interceptor';

describe('CorrelationIdInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContactsListComponent,
        ContactsFormComponent,
        ContactsFormReactiveComponent,
        ContactsDetailComponent,
        HeaderComponent,
        NotificationComponent,
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
        CorrelationIdInterceptor,
      ],
    });
  });

  it('should be created', () => {
    const service: CorrelationIdInterceptor = TestBed.get(CorrelationIdInterceptor);
    expect(service).toBeTruthy();
  });
});
