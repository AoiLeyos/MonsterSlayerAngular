import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { HealthComponent } from './health/health.component';
import { HeroHealthService } from './services/hero-health.service';
import { MonsterHealthService } from './services/monster-health.service';
import { ButtonsComponent } from './buttons/buttons.component';
import { FightLogsComponent } from './fight-logs/fight-logs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HealthBarComponent,
    HealthComponent,
    ButtonsComponent,
    FightLogsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public heroHealthService: HeroHealthService, public monsterHealthService: MonsterHealthService) { }
  title = 'MonsterSlayer';
}
