import { Component } from '@angular/core';
import { GiveUpButtonComponent } from './give-up-button/give-up-button.component';
import { AttackButtonComponent } from './attack-button/attack-button.component';
import { HealButtonComponent } from './heal-button/heal-button.component';
import { SpecialAttackButtonComponent } from './special-attack-button/special-attack-button.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    GiveUpButtonComponent,
    AttackButtonComponent,
    HealButtonComponent,
    SpecialAttackButtonComponent,
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
