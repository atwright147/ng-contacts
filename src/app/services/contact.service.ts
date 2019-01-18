import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContactFormModel } from '../interfaces/contact-form-model.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  base_url = 'http://localhost:8882';

  constructor(private http: HttpClient) {}

  getContactsList() {
    return this.http.get<Array<any>>(`${this.base_url}/contacts`);
  }

  getContactById(contactId: number): Observable<ContactFormModel> {
    return this.http.get<ContactFormModel>(`${this.base_url}/contacts/${contactId}`);
  }

  send(model: any) {
    return this.http.post(`${this.base_url}/contacts/`, model);
  }
}
