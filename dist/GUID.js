"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseID = exports.GUID = void 0;
/**
*   Returns Globally-unique identifier
*   @Returns GUID
*/
function GUID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return "" + s4() + s4() + s4() + s4();
}
exports.GUID = GUID;
/**
*   Parses ID from string
*   @Returns GUID
*/
function parseID(oID, spacer) {
    return oID.split(spacer);
}
exports.parseID = parseID;
//# sourceMappingURL=GUID.js.map