"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exp = void 0;
exports.exp = function (value, exponent) {
    var exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
};
//# sourceMappingURL=Math.js.map