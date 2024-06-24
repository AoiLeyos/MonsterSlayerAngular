import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroHealthService {
  private _currentHealth: number = 100
  private _maxHealth: number = 100

  get maxHealth() {
    return this._maxHealth;
  }

  get currentHealth() {
    return this._currentHealth;
  }

  set currentHealth(newCurrentHealth: number) {
    if (newCurrentHealth < 0) {
      this._currentHealth = 0
    } else if (newCurrentHealth > this.maxHealth) {
      this._currentHealth = this.maxHealth
    }
    else {
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
