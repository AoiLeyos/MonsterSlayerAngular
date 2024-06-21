import { Injectable } from '@angular/core';
import { HeroHealthService } from './hero-health.service';
import { MonsterHealthService } from './monster-health.service';
import { LogsService } from './logs.service';
import { ResetGameService } from './reset-game.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialAttackService {

  constructor(
    public heroHealthService: HeroHealthService,
    public monsterHealthService: MonsterHealthService,
    public logsService: LogsService,
    public resetGameService: ResetGameService,
  ) { }

  specialAttack() {
    let heroSpecialDamage = Math.floor(Math.random() * 21) * 2
    let monsterDamage = Math.floor(Math.random() * 21)

    this.monsterHealthService.currentHealth -= heroSpecialDamage
    this.logsService.log(`Player use a special attack on Monster and hit them for ${heroSpecialDamage} damage, Monster health : ${this.monsterHealthService.currentHealth} .`)

    this.heroHealthService.currentHealth -= monsterDamage
    this.logsService.log(`Monster hit Player for ${monsterDamage} damage, Player health : ${this.heroHealthService.currentHealth} .`)


    if (this.heroHealthService.currentHealth === 0 && this.monsterHealthService.currentHealth === 0) {
      alert("Equality");
      this.resetGameService.resetGame()
    } else if (this.heroHealthService.currentHealth === 0) {
      alert("Monster win's");
      this.resetGameService.resetGame();
    }
    else if (this.monsterHealthService.currentHealth === 0) {
      alert("Player win");
      this.resetGameService.resetGame()
    }
  }
}
