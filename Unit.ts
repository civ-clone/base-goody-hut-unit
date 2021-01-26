import { Horseman, Swordman } from '@civ-clone/base-unit-civ1/Units';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-goody-hut/Action';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import PlayerUnit from '@civ-clone/core-unit/Unit';

export class Unit extends Action {
  #randomNumberGenerator: () => number;
  #rulesRegistry: RuleRegistry;

  constructor(
    goodyHut: GoodyHut,
    unit: PlayerUnit,
    randomNumberGenerator: () => number = (): number => Math.random(),
    rulesRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(goodyHut, unit);

    this.#randomNumberGenerator = randomNumberGenerator;
    this.#rulesRegistry = rulesRegistry;
  }

  perform(): void {
    // TODO: this should be controlled via `Rule`s or similar
    const availableUnits = [Horseman, Swordman],
      RandomUnit =
        availableUnits[
          Math.floor(availableUnits.length * this.#randomNumberGenerator())
        ];

    new RandomUnit(
      null, // TODO: detect nearby city, same as civ1
      this.unit().player(),
      this.unit().tile(),
      this.#rulesRegistry
    );
  }
}

export default Unit;
