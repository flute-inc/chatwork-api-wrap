"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withToken = void 0;
const constants_1 = require("./constants");
const withToken = (apiToken) => (request) => {
    return request.set(constants_1.AUTHORIZATION_TOKEN, `Bearer ${apiToken}`);
};
exports.withToken = withToken;
