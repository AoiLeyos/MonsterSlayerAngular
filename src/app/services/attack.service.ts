import { Injectable } from '@angular/core';
import { HeroHealthService } from './hero-health.service';
import { MonsterHealthService } from './monster-health.service';
import { LogsService } from './logs.service';

@Injectable({
  providedIn: 'root'
})
export class AttackService {
  constructor(public heroHealthService: HeroHealthService,
    public monsterHealthService: MonsterHealthService,
    public logsService: LogsService) { }

  heroAttack() {
    let monsterDamage = Math.floor(Math.random() * 21);
    let heroDamage = Math.floor(Math.random() * 21);
    this.monsterHealthService.currentHealth -= heroDamage
    this.heroHealthService.currentHealth -= monsterDamage
    this.logsService.log(`Player hit monster for ${heroDamage} damage, monster health ${this.monsterHealthService.currentHealth} .`)
  }


}