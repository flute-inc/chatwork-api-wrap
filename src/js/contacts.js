"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
const superagent_1 = __importDefault(require("superagent"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const request_1 = require("./request");
const BASE_CONTACTS_URI = `${constants_1.BASE_URI}contacts`;
async function get(apiToken) {
    return superagent_1.default
        .get(`${BASE_CONTACTS_URI}`)
        .use((0, request_1.withToken)(apiToken))
        .then(service_1.requestSuccess);
}
