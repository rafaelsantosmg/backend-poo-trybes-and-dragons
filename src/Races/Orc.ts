import Race from './Races';

export default class Orc extends Race {
  private _maxLife: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 74;
    Orc._count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Orc._count;
  }
}