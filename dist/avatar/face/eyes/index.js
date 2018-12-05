"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var options_1 = require("../../../options");
var Close_1 = require("./Close");
var Cry_1 = require("./Cry");
var Default_1 = require("./Default");
var Dizzy_1 = require("./Dizzy");
var Side_1 = require("./Side");
var Squint_1 = require("./Squint");
var Surprised_1 = require("./Surprised");
var Eyes = /** @class */ (function (_super) {
    __extends(Eyes, _super);
    function Eyes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eyes.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Default_1.default, option: options_1.EyesOption },
            React.createElement(Close_1.default, null),
            React.createElement(Cry_1.default, null),
            React.createElement(Default_1.default, null),
            React.createElement(Dizzy_1.default, null),
            React.createElement(Side_1.default, null),
            React.createElement(Squint_1.default, null),
            React.createElement(Surprised_1.default, null)));
    };
    return Eyes;
}(React.Component));
exports.default = Eyes;
