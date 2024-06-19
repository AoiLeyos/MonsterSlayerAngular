import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  logs: string[] = []

  log(message: string) {
    this.logs.shift();
  }
}
