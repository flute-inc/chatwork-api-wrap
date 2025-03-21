"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = exports.status = void 0;
const superagent_1 = __importDefault(require("superagent"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const request_1 = require("./request");
const BASE_MY_URI = `${constants_1.BASE_URI}my`;
exports.status = {
    get: async (apiToken) => {
        return superagent_1.default
            .get(`${BASE_MY_URI}/status`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
};
exports.tasks = {
    get: async (apiToken, options = {}) => {
        return superagent_1.default
            .get(`${BASE_MY_URI}/tasks?${(0, service_1.objectToQuery)(options)}`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
};
