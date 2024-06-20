import { Component } from '@angular/core';
import { ResetGameService } from '../../services/reset-game.service';

@Component({
  selector: 'app-give-up-button',
  standalone: true,
  imports: [],
  templateUrl: './give-up-button.component.html',
  styleUrl: './give-up-button.component.css'
})
export class GiveUpButtonComponent {
  constructor(public resetGameService: ResetGameService) { }

  giveUp() {
    alert("you are dishonored for leaving the battle")
    this.resetGameService.resetGame()

  }
}
