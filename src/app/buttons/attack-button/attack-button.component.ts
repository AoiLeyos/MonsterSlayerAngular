import { Component } from '@angular/core';
import { AttackService } from '../../services/attack.service';
import { HeroHealthService } from '../../services/hero-health.service';
import { MonsterHealthService } from '../../services/monster-health.service';

@Component({
  selector: 'app-attack-button',
  standalone: true,
  imports: [],
  templateUrl: './attack-button.component.html',
  styleUrl: './attack-button.component.css'
})
export class AttackButtonComponent {
  constructor(public attackService: AttackService,
    public heroHealthService: HeroHealthService,
    public monsterHealthService: MonsterHealthService) { }


  Attack() {
    this.attackService.Attack()
  };

}
