import { Component } from '@angular/core';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) {}

  success(message: string) {
    this.notificationService.success(message);
  }

  error(message: string) {
    this.notificationService.error(message);
  }

  info(message: string) {
    this.notificationService.info(message);
  }

  warn(message: string) {
    this.notificationService.warn(message);
  }

  clear() {
    this.notificationService.clear();
  }
}
