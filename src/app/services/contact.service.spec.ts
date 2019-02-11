import { of } from 'rxjs';
import { asyncScheduler } from 'rxjs';

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
    it('should perform GET with correct args', () => {
      mockHttp.get.and.returnValue();
      contactService.getContactsList();

      expect(mockHttp.get.calls.mostRecent().args).toEqual(['http://localhost:8882/contacts']);
    });

    it('should fetch contacts via HttpClient GET', () => {
      const payload$ = of([{ firstName: 'Test', surname: 'User', email: 'test@example.com' }], asyncScheduler);

      mockHttp.get.and.returnValue(payload$);
      expect(contactService.getContactsList()).toEqual(payload$);
    });
  });

  describe('#getContactById', () => {
    it('should perform GET with correct args', () => {
      mockHttp.get.and.returnValue();
      contactService.getContactById(1);

      expect(mockHttp.get.calls.mostRecent().args).toEqual(['http://localhost:8882/contacts/1']);
    });

    it('should accept an ID and fetch contacts via HttpClient GET', () => {
      const payload$ = of({ firstName: 'Test', surname: 'User', email: 'test@example.com' }, asyncScheduler);

      mockHttp.get.and.returnValue(payload$);
      expect(contactService.getContactById(1)).toEqual(payload$);
    });
  });

  describe('#send', () => {
    let payload;

    beforeEach(() => {
      payload = { firstName: 'Test', surname: 'User', email: 'test@example.com' };
    });

    it('should perform POST with correct args', () => {
      mockHttp.post.and.returnValue();
      contactService.send(payload);

      expect(mockHttp.post.calls.mostRecent().args).toEqual(['http://localhost:8882/contacts', payload]);
    });

    it('should accept an ID and fetch contacts via HttpClient GET', () => {
      const payload$ = of({ firstName: 'Test', surname: 'User', email: 'test@example.com' }, asyncScheduler);

      mockHttp.post.and.returnValue(payload$);
      expect(contactService.send(payload)).toEqual(payload$);
    });
  });
});
