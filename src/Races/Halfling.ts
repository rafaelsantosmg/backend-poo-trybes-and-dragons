import Races from './Races';

export default class Halfling extends Races {
  private _maxLife: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 60;
    Halfling._count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Halfling._count;
  }
}