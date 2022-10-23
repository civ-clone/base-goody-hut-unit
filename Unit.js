"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Unit_randomNumberGenerator, _Unit_ruleRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const Action_1 = require("@civ-clone/core-goody-hut/Action");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Unit_1 = require("./Rules/Unit");
class Unit extends Action_1.Action {
    constructor(goodyHut, unit, randomNumberGenerator = () => Math.random(), rulesRegistry = RuleRegistry_1.instance) {
        super(goodyHut, unit);
        _Unit_randomNumberGenerator.set(this, void 0);
        _Unit_ruleRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _Unit_randomNumberGenerator, randomNumberGenerator, "f");
        __classPrivateFieldSet(this, _Unit_ruleRegistry, rulesRegistry, "f");
    }
    perform() {
        __classPrivateFieldGet(this, _Unit_ruleRegistry, "f").process(Unit_1.default, this.goodyHut(), this.unit());
    }
}
exports.Unit = Unit;
_Unit_randomNumberGenerator = new WeakMap(), _Unit_ruleRegistry = new WeakMap();
exports.default = Unit;
//# sourceMappingURL=Unit.js.map