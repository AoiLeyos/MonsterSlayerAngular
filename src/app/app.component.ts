import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HealthBarComponent } from './health-bar/health-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HealthBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MonsterSlayer';
}
