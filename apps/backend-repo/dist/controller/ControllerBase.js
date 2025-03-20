"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResponse = buildResponse;
function buildResponse(arg) {
    var _a, _b, _c;
    return {
        isSuccess: (_a = arg.isSuccess) !== null && _a !== void 0 ? _a : true,
        message: (_b = arg.message) !== null && _b !== void 0 ? _b : '',
        data: (_c = arg.data) !== null && _c !== void 0 ? _c : {},
    };
}
