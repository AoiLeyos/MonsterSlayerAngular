import { Component, Input } from '@angular/core';
import { MonsterHealthService } from '../services/monster-health.service';
import { HeroHealthService } from '../services/hero-health.service';
import { HealthComponent } from '../health/health.component';

@Component({
  selector: 'app-health-bar',
  standalone: true,
  imports: [HealthComponent],
  templateUrl: './health-bar.component.html',
  styleUrl: './health-bar.component.css'
})
export class HealthBarComponent {
  constructor(public monsterHealthService: MonsterHealthService,
    public heroHealthService: HeroHealthService,
  ) { }
  @Input() value: number = 100
}
