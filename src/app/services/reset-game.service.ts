import { Injectable } from '@angular/core';
import { HeroHealthService } from './hero-health.service';
import { MonsterHealthService } from './monster-health.service';
import { LogsService } from './logs.service';

@Injectable({
  providedIn: 'root'
})
export class ResetGameService {
  constructor(public heroHealthService: HeroHealthService,
    public monsterHealthService: MonsterHealthService,
    public logsService: LogsService,
  ) { }

  resetGame() {
    this.logsService.logs = []
    this.heroHealthService.currentHealth = this.heroHealthService.maxHealth;
    this.monsterHealthService.currentHealth = this.monsterHealthService.maxHealth;
  }
}
