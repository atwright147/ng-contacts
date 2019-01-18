import { Component, OnInit } from '@angular/core';

import { Notification, NotificationType } from '../../interfaces/notification.interface';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe((notification: Notification) => {
      if (!notification) {
        // clear alerts when an empty alert is received
        this.notifications = [];
        return;
      }

      // add alert to array
      this.notifications.push(notification);
    });
  }

  removeAlert(notification: Notification) {
    this.notifications = this.notifications.filter(x => x !== notification);
  }

  cssClass(notification: Notification) {
    if (!notification) {
      return;
    }

    // return css class based on alert type
    switch (notification.type) {
      case NotificationType.Success:
        return 'alert alert-success';

      case NotificationType.Error:
        return 'alert alert-danger';

      case NotificationType.Warning:
        return 'alert alert-warning';

      case NotificationType.Info:
        return 'alert alert-info';
    }
  }
}
