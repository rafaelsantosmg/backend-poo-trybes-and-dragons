import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _fighter: Fighter,
    private _environment: Array<Fighter> | Array<SimpleFighter>,
  ) {
    super(_fighter);
    this._fighter = _fighter;
    this._environment = _environment;
  }

  public get environment() {
    return this._environment;
  }

  private singleFight(enemy: Fighter | SimpleFighter): number {
    while (this._fighter.lifePoints > 0 && enemy.lifePoints > 0) {
      this._fighter.attack(enemy);
      enemy.attack(this._fighter);
    }
    return this._fighter.lifePoints === -1 ? -1 : 1;
  }

  fight(): number {
    const results = this._environment.map((enemy) => this.singleFight(enemy));
    return results.every((result: number) => result === 1) ? 1 : -1;
  }
}