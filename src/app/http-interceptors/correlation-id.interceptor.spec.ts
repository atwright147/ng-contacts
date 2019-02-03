import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from '../components/contacts-detail/contacts-detail.component';
import { ContactsFormComponent } from '../components/contacts-form/contacts-form.component';
import { ContactsFormReactiveComponent } from '../components/contacts-form-reactive/contacts-form-reactive.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

import { ContactService } from '../services/contact.service';
import { CorrelationIdInterceptor } from './correlation-id.interceptor';

describe('CorrelationIdInterceptor', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;

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
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        ContactService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CorrelationIdInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.get(ContactService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add the X-Correlation-Id header', () => {
    service.getContactsList().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${service.base_url}/contacts`);

    expect(httpRequest.request.headers.has('X-Correlation-Id')).toEqual(true);
  });
});
