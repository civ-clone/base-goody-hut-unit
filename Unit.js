"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _randomNumberGenerator, _ruleRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const Action_1 = require("@civ-clone/core-goody-hut/Action");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Unit_1 = require("./Rules/Unit");
class Unit extends Action_1.Action {
    constructor(goodyHut, unit, randomNumberGenerator = () => Math.random(), rulesRegistry = RuleRegistry_1.instance) {
        super(goodyHut, unit);
        _randomNumberGenerator.set(this, void 0);
        _ruleRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _randomNumberGenerator, randomNumberGenerator);
        __classPrivateFieldSet(this, _ruleRegistry, rulesRegistry);
    }
    perform() {
        __classPrivateFieldGet(this, _ruleRegistry)
            .process(Unit_1.Unit, this.goodyHut(), this.unit());
    }
}
exports.Unit = Unit;
_randomNumberGenerator = new WeakMap(), _ruleRegistry = new WeakMap();
exports.default = Unit;
//# sourceMappingURL=Unit.js.map