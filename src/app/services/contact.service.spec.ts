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

  it('should be created', () => {
    mockHttp.get.and.returnValue(of([{ firstName: 'Testr', surname: 'User' }]));
    expect(contactService.getContactsList()).toEqual([{ firstName: 'Test', surname: 'User' }]);
  });
});
