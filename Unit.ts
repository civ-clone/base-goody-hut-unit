import { Action, IAction } from '@civ-clone/core-goody-hut/Action';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import { Unit as UnitRule, IUnitRegistry } from './Rules/Unit';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import PlayerUnit from '@civ-clone/core-unit/Unit';

export class Unit extends Action implements IAction {
  #randomNumberGenerator: () => number;
  #ruleRegistry: RuleRegistry;

  constructor(
    goodyHut: GoodyHut,
    unit: PlayerUnit,
    randomNumberGenerator: () => number = (): number => Math.random(),
    rulesRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(goodyHut, unit);

    this.#randomNumberGenerator = randomNumberGenerator;
    this.#ruleRegistry = rulesRegistry;
  }

  perform(): void {
    (this.#ruleRegistry as IUnitRegistry).process(
      UnitRule,
      this.goodyHut(),
      this.unit()
    );
  }
}

export default Unit;
