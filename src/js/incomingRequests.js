"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
exports.putWithId = putWithId;
exports.deleteWithId = deleteWithId;
const superagent_1 = __importDefault(require("superagent"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const request_1 = require("./request");
const BASE_INCOMING_REQUESTS_URI = `${constants_1.BASE_URI}incoming_requests`;
async function get(apiToken) {
    return superagent_1.default
        .get(BASE_INCOMING_REQUESTS_URI)
        .use((0, request_1.withToken)(apiToken))
        .then(service_1.requestSuccess)
        .catch(service_1.requestError);
}
async function putWithId(apiToken, request_id) {
    return superagent_1.default
        .put(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`)
        .use((0, request_1.withToken)(apiToken))
        .then(service_1.requestSuccess)
        .catch(service_1.requestError);
}
async function deleteWithId(apiToken, request_id) {
    return superagent_1.default
        .delete(`${BASE_INCOMING_REQUESTS_URI}/${request_id}`)
        .use((0, request_1.withToken)(apiToken))
        .then(service_1.requestSuccess)
        .catch(service_1.requestError);
}
