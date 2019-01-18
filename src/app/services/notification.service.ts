import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject, Observable } from 'rxjs';

import { Notification, NotificationType } from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject = new Subject<Notification>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  getNotification(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.alert(NotificationType.Success, message, keepAfterRouteChange);
  }

  error(message: string, keepAfterRouteChange = false) {
    this.alert(NotificationType.Error, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.alert(NotificationType.Info, message, keepAfterRouteChange);
  }

  warn(message: string, keepAfterRouteChange = false) {
    this.alert(NotificationType.Warning, message, keepAfterRouteChange);
  }

  alert(type: NotificationType, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Notification>{ type: type, message: message });
  }

  clear() {
    // clear alerts
    this.subject.next();
  }
}
