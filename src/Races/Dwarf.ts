import Race from './Races';

export default class Dwarf extends Race {
  private _maxLife: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 80;
    Dwarf._count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Dwarf._count;
  }
}