import { Observable, of } from 'rxjs';

import { ContactFormModel } from '../interfaces/contact-form-model.interface';
import { NotificationService } from './notification.service';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  let contactService: ContactService;
  let mockNotificationService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj(mockHttp, ['get', 'post']);
    mockNotificationService = jasmine.createSpyObj(mockNotificationService, ['get', 'post']);
    contactService = new ContactService(mockHttp, mockNotificationService);
  });

  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });

  describe('#getContactsList', () => {
    it('should fetch contacts via HttpClient GET', () => {
      const payload = of([{ firstName: 'Test', surname: 'User', email: 'test@example.com' }]);

      mockHttp.get.and.returnValue(payload);
      expect(contactService.getContactsList()).toEqual(payload);
    });
  });

  describe('#getContactById', () => {
    it('should accept an ID and fetch contacts via HttpClient GET', () => {
      const payload = of([{ firstName: 'Test', surname: 'User', email: 'test@example.com' }]);

      mockHttp.get.and.returnValue(payload);
      expect(contactService.getContactsList()).toEqual(payload);
    });
  });
});
