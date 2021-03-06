import {Injectable} from '@angular/core';
import { ApiService } from '@shared/infrastructure/datasources/api.service';


@Injectable({ providedIn: 'root' })
export class ApiWebNotifications {
  constructor(private apiService: ApiService) {

  }
  push(token = '') {
    return this.apiService.post( 'character/push-notification', {token});
  }
}
