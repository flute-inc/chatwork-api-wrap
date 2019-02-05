"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.withToken = (apiToken) => (request) => {
    return request.set(constants_1.AUTHORIZATION_TOKEN, `Bearer ${apiToken}`);
};
