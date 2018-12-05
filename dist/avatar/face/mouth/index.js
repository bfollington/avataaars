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
var Concerned_1 = require("./Concerned");
var Disbelief_1 = require("./Disbelief");
var Grimace_1 = require("./Grimace");
var Sad_1 = require("./Sad");
var ScreamOpen_1 = require("./ScreamOpen");
var Serious_1 = require("./Serious");
var Mouth = /** @class */ (function (_super) {
    __extends(Mouth, _super);
    function Mouth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouth.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Concerned_1.default, option: options_1.MouthOption },
            React.createElement(Concerned_1.default, null),
            React.createElement(Disbelief_1.default, null),
            React.createElement(Grimace_1.default, null),
            React.createElement(Sad_1.default, null),
            React.createElement(ScreamOpen_1.default, null),
            React.createElement(Serious_1.default, null)));
    };
    return Mouth;
}(React.Component));
exports.default = Mouth;
