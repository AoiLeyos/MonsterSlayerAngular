import { Injectable } from '@angular/core';
import { HeroHealthService } from './hero-health.service';
import { LogsService } from './logs.service';
import { ResetGameService } from './reset-game.service';

@Injectable({
  providedIn: 'root'
})
export class HealService {

  constructor(public heroHealthService: HeroHealthService,
    public logsService: LogsService,
    public resetGameService: ResetGameService
  ) { }

  heal() {
    let heroHeal = Math.floor(Math.random() * 16)
    let monsterDamage = Math.floor(Math.random() * 21)
    this.heroHealthService.currentHealth += heroHeal
    this.logsService.log(`Player heal himself for ${heroHeal}, current Player health : ${this.heroHealthService.currentHealth} .`)
    setTimeout(() => {
      this.heroHealthService.currentHealth -= monsterDamage
      this.logsService.log(`Monster hit Player for ${monsterDamage} damage Player health : ${this.heroHealthService.currentHealth} `)


      if (this.heroHealthService.currentHealth === 0) {
        alert("Monster win's");
        this.resetGameService.resetGame()
      }
    }, 100)


  }
}
