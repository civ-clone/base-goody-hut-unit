"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const Action_1 = require("@civ-clone/core-goody-hut/Action");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Unit_1 = require("./Rules/Unit");
class Unit extends Action_1.Action {
    constructor(goodyHut, unit, randomNumberGenerator = () => Math.random(), rulesRegistry = RuleRegistry_1.instance) {
        super(goodyHut, unit);
        this._randomNumberGenerator = randomNumberGenerator;
        this._ruleRegistry = rulesRegistry;
    }
    perform() {
        this._ruleRegistry.process(Unit_1.default, this.goodyHut(), this.unit());
    }
}
exports.Unit = Unit;
exports.default = Unit;
//# sourceMappingURL=Unit.js.map