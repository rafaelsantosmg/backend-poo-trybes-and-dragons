import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _fighterOne: Fighter,
    private _fighterTwo: Fighter,
  ) {
    super(_fighterOne);
    this._fighterTwo = _fighterTwo;
  }

  fight(): number {
    while (this._fighterOne.lifePoints > 0 && this._fighterTwo.lifePoints > 0) {
      this._fighterOne.attack(this._fighterTwo);
      this._fighterTwo.attack(this._fighterOne);
    }
    return super.fight();
  }
}