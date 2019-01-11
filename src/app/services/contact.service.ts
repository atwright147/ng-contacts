import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  base_url = 'http://localhost:8882';

  constructor(private http: HttpClient) {}

  getContactsList() {
    this.http.get<Array<any>>(`${this.base_url}/contacts`);
  }

  getContactById(contactId: number) {
    this.http.get<Array<any>>(`${this.base_url}/contact/${contactId}`);
  }
}
