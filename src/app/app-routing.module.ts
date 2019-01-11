import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
  },
  {
    path: 'contact/create',
    component: ContactsFormComponent,
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
