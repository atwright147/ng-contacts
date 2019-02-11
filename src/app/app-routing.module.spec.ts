/* tslint:disable:no-unused-variable */
import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactService } from './services/contact.service';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsFormReactiveComponent } from './components/contacts-form-reactive/contacts-form-reactive.component';
import { AppComponent } from './app.component';

import { routes } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

fdescribe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        NotificationComponent,
        HeaderComponent,
        FooterComponent,
        ContactsListComponent,
        ContactsDetailComponent,
        ContactsFormComponent,
        ContactsFormReactiveComponent,
        AppComponent,
      ],
      providers: [
        ContactService,
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  const scenarios = [
    {
      actualPath: '',
      expectedPath: '/',
      component: ContactsListComponent,
    },
    {
      actualPath: '/contact/123/edit/template',
      expectedPath: '/contact/123/edit/template',
      component: ContactsFormComponent,
    },
    {
      actualPath: '/contact/123/edit/reactive',
      expectedPath: '/contact/123/edit/reactive',
      component: ContactsFormReactiveComponent,
    },
    {
      actualPath: '/contact/create/template',
      expectedPath: '/contact/create/template',
      component: ContactsFormComponent,
    },
    {
      actualPath: '/contact/create/reactive',
      expectedPath: '/contact/create/reactive',
      component: ContactsFormReactiveComponent,
    },
    {
      actualPath: '/contact/123',
      expectedPath: '/contact/123',
      component: ContactsDetailComponent,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`navigating to "${scenario.expectedPath}"`, () => {
      it('should arrive at the correct path', fakeAsync(() => {
        router.navigate([scenario.actualPath]).then(() => {
          expect(location.path()).toBe(scenario.expectedPath);
          tick();
        });
      }));

      it('should render the correct component', fakeAsync((done) => {
        router.navigate([scenario.actualPath]).then(() => {
          expect(scenario.component).toEqual(scenario.component);
          tick();
        });
      }));
    });
  });

  // it('navigate to "search" takes you to /search', fakeAsync(() => {
  //   router.navigate(['/search']).then(() => {
  //     expect(location.path()).toBe('/search');
  //   });
  // }));
});
