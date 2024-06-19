import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterHealthService {


  private _maxHealth: number = 100
  private _currentHealth: number = 100




  get maxHealth() {
    return this._maxHealth;
  }

  get currentHealth() {
    return this._currentHealth;
  }

  set currentHealth(newcurrentHealth: number) {
    if (newcurrentHealth < 0) {
      this._currentHealth = 0
    } else {
      this._currentHealth = newcurrentHealth

    }

  }

  isAlive(): boolean {
    if (this._currentHealth > 0) {
      return true
    } else { return false }
  }
}
