import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import PlayerUnit from '@civ-clone/core-unit/Unit';

export class Unit extends Rule<[GoodyHut, PlayerUnit], PlayerUnit> {}

export default Unit;

export interface IUnitRegistry
  extends IRuleRegistry<Unit, [GoodyHut, PlayerUnit], PlayerUnit> {}
