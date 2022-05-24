import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  private static _count = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior._count += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Warrior._count;
  }
}