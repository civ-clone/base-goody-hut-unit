import { Action, IAction } from '@civ-clone/core-goody-hut/Action';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import PlayerUnit from '@civ-clone/core-unit/Unit';
import UnitRule from './Rules/Unit';
import { instance as rngInstance } from '@civ-clone/core-random';

export class Unit extends Action implements IAction {
  private _randomNumberGenerator: () => number;
  private _ruleRegistry: RuleRegistry;

  constructor(
    goodyHut: GoodyHut,
    unit: PlayerUnit,
    randomNumberGenerator: () => number = rngInstance,
    rulesRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(goodyHut, unit);

    this._randomNumberGenerator = randomNumberGenerator;
    this._ruleRegistry = rulesRegistry;
  }

  perform(): void {
    this._ruleRegistry.process(UnitRule, this.goodyHut(), this.unit());
  }
}

export default Unit;
