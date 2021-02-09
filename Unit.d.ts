import { Action, IGoodyHutAction } from '@civ-clone/core-goody-hut/Action';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import PlayerUnit from '@civ-clone/core-unit/Unit';
export declare class Unit extends Action implements IGoodyHutAction {
  #private;
  constructor(
    goodyHut: GoodyHut,
    unit: PlayerUnit,
    randomNumberGenerator?: () => number,
    rulesRegistry?: RuleRegistry
  );
  perform(): void;
}
export default Unit;
