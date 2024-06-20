import { Component } from '@angular/core';
import { HeroHealthService } from '../../services/hero-health.service';
import { HealService } from '../../services/heal.service';

@Component({
  selector: 'app-heal-button',
  standalone: true,
  imports: [],
  templateUrl: './heal-button.component.html',
  styleUrl: './heal-button.component.css'
})
export class HealButtonComponent {
  constructor(public heroHealthService: HeroHealthService,
    public healService: HealService
  ) { }

  Heal() {
    this.healService.heal()
  }
}
