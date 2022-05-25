import Race from './Races';

export default class Elf extends Race {
  private _maxLife: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 99;
    Elf._count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Elf._count;
  }
}