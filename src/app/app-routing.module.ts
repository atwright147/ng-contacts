import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsFormReactiveComponent } from './components/contacts-form-reactive/contacts-form-reactive.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
  },
  {
    path: 'contact/:contactId/edit/template',
    component: ContactsFormComponent,
  },
  {
    path: 'contact/:contactId/edit/reactive',
    component: ContactsFormReactiveComponent,
  },
  {
    path: 'contact/create/template',
    component: ContactsFormComponent,
  },
  {
    path: 'contact/create/reactive',
    component: ContactsFormReactiveComponent,
  },
  {
    path: 'contact/:contactId',
    component: ContactsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
