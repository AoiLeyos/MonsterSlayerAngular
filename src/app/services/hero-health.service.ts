import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroHealthService {
  private _currentHealth: number = 100

  get currentHealth() {
    return this._currentHealth;
  }

  set currentHealth(newCurrentHealth: number) {
    if (newCurrentHealth < 0) {
      this._currentHealth = 0
    } else {
      this._currentHealth = newCurrentHealth;
    }

  }



  specialAttack() {
    let damage = Math.floor(Math.random() * 21)
    this._currentHealth -= damage * 2;

  }

  heal() {
    let heal = Math.floor(Math.random() * 16)
    this._currentHealth += heal;
  }
}
