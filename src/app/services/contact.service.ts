import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IContact } from '../interfaces/contact.interface';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  base_url = 'http://localhost:8882';

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  getContactsList(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.base_url}/contacts`);
  }

  getContactById(contactId: number): Observable<IContact> {
    return this.http.get<IContact>(`${this.base_url}/contacts/${contactId}`);
  }

  send(model: IContact) {
    return this.http.post(`${this.base_url}/contacts`, model);
  }
}
