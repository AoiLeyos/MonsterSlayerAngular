import { Component } from '@angular/core';
import { SpecialAttackService } from '../../services/special-attack.service';
import { HeroHealthService } from '../../services/hero-health.service';
import { MonsterHealthService } from '../../services/monster-health.service';

@Component({
  selector: 'app-special-attack-button',
  standalone: true,
  imports: [],
  templateUrl: './special-attack-button.component.html',
  styleUrl: './special-attack-button.component.css'
})
export class SpecialAttackButtonComponent {
  constructor(public specialAttackService: SpecialAttackService,
    public heroHealthService: HeroHealthService,
    public monsterHealthService: MonsterHealthService
  ) { }

  speAttack() {
    this.specialAttackService.specialAttack()
  }
}
