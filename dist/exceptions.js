"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoochException = exports.NoConnectionException = exports.RelationshipException = exports.IDException = void 0;
function IDException(ID, reason, message) {
    this.ID = ID;
    this.reason = reason;
    this.message = message;
}
exports.IDException = IDException;
function RelationshipException(ID, reason, message) {
    this.ID = ID;
    this.reason = reason;
    this.message = message;
}
exports.RelationshipException = RelationshipException;
function NoConnectionException(ID, reason, message) {
    this.ID = ID;
    this.reason = reason;
    this.message = message;
}
exports.NoConnectionException = NoConnectionException;
function ScoochException(ID, reason, message) {
    this.ID = ID;
    this.reason = reason;
    this.message = message;
}
exports.ScoochException = ScoochException;
//# sourceMappingURL=exceptions.js.map