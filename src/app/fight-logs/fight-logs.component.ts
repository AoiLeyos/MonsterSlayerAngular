import { Component } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fight-logs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fight-logs.component.html',
  styleUrl: './fight-logs.component.css'
})
export class FightLogsComponent {
  constructor(public logsService: LogsService) { }
  showLogs() {
    this.logsService.logs
  }
}
