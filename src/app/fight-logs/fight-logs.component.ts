import { Component } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-fight-logs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './fight-logs.component.html',
  styleUrl: './fight-logs.component.css'
})
export class FightLogsComponent {
  constructor(public logsService: LogsService) { }
  showLogs() {
    return this.logsService.logs
  }
}
