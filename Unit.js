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
var _randomNumberGenerator, _rulesRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const Units_1 = require("@civ-clone/base-unit-civ1/Units");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-goody-hut/Action");
class Unit extends Action_1.default {
    constructor(goodyHut, unit, randomNumberGenerator = () => Math.random(), rulesRegistry = RuleRegistry_1.instance) {
        super(goodyHut, unit);
        _randomNumberGenerator.set(this, void 0);
        _rulesRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _randomNumberGenerator, randomNumberGenerator);
        __classPrivateFieldSet(this, _rulesRegistry, rulesRegistry);
    }
    perform() {
        // TODO: this should be controlled via `Rule`s or similar
        const availableUnits = [Units_1.Horseman, Units_1.Swordman], RandomUnit = availableUnits[Math.floor(availableUnits.length * __classPrivateFieldGet(this, _randomNumberGenerator).call(this))];
        new RandomUnit(null, // TODO: detect nearby city, same as civ1
        this.unit().player(), this.unit().tile(), __classPrivateFieldGet(this, _rulesRegistry));
    }
}
exports.Unit = Unit;
_randomNumberGenerator = new WeakMap(), _rulesRegistry = new WeakMap();
exports.default = Unit;
//# sourceMappingURL=Unit.js.map