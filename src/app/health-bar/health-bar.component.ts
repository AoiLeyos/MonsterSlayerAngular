import { Component, Input } from '@angular/core';
import { MonsterHealthService } from '../services/monster-health.service';

@Component({
  selector: 'app-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './health-bar.component.html',
  styleUrl: './health-bar.component.css'
})
export class HealthBarComponent {
  constructor(public monsterHealthService: MonsterHealthService) { }
  @Input() value: number = 100
}
