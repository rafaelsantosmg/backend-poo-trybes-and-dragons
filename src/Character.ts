import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import random from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 80);
    this._archetype = new Mage('Helck');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = random(1, 10);
    this._defense = random(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = { type_: this._archetype.energyType, amount: random(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  attack(enemy: SimpleFighter): void {
    this.receiveDamage(enemy.strength);
  }

  special(enemy: Fighter): void {
    this.receiveDamage(enemy.strength);
  }

  levelUp(): number {
    this._defense += random(1, 10);
    this._dexterity += random(1, 10);
    this._strength += random(1, 10);
    this._maxLifePoints += random(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      return this._race.maxLifePoints;
    }
    return this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}