import { Component } from '@angular/core';
import { AttackService } from '../../services/attack.service';

@Component({
  selector: 'app-attack-button',
  standalone: true,
  imports: [],
  templateUrl: './attack-button.component.html',
  styleUrl: './attack-button.component.css'
})
export class AttackButtonComponent {
  constructor(public attackService: AttackService) { }

  heroAttack() {
    this.attackService.heroAttack()
  }

}
