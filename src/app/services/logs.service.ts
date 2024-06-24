import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  logs: string[] = []

  log(message: string) {

    if (this.logs.length > 16) {
      this.logs.pop();
    }
    this.logs.unshift(message);
  }
}
