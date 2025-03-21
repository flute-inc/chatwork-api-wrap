"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.link = exports.files = exports.tasks = exports.messages = exports.members = void 0;
exports.get = get;
exports.post = post;
exports.getWithId = getWithId;
exports.putWithId = putWithId;
exports.deleteWithId = deleteWithId;
const superagent_1 = __importDefault(require("superagent"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const request_1 = require("./request");
const BASE_ROOMS_URI = `${constants_1.BASE_URI}rooms`;
async function get(apiToken) {
    return superagent_1.default
        .get(BASE_ROOMS_URI)
        .use((0, request_1.withToken)(apiToken))
        .then(service_1.requestSuccess)
        .catch(service_1.requestError);
}
async function post(apiToken, name, members_admin_ids, options = {}) {
    return superagent_1.default
        .post(BASE_ROOMS_URI)
        .use((0, request_1.withToken)(apiToken))
        .send((0, service_1.objectToQuery)({ name, members_admin_ids, ...options }))
        .then(service_1.requestSuccess)
        .catch(service_1.requestError);
}
async function getWithId(apiToken, room_id) {
    return superagent_1.default
        .get(`${BASE_ROOMS_URI}/${room_id}`)
        .use((0, request_1.withToken)(apiToken))
        .then(service_1.requestSuccess)
        .catch(service_1.requestError);
}
async function putWithId(apiToken, room_id, options = {}) {
    return superagent_1.default
        .put(`${BASE_ROOMS_URI}/${room_id}`)
        .use((0, request_1.withToken)(apiToken))
        .send((0, service_1.objectToQuery)({ ...options }))
        .then(service_1.requestSuccess)
        .catch(service_1.requestError);
}
async function deleteWithId(apiToken, room_id, action_type) {
    return superagent_1.default
        .delete(`${BASE_ROOMS_URI}/${room_id}`)
        .use((0, request_1.withToken)(apiToken))
        .send((0, service_1.objectToQuery)({ action_type }))
        .then(service_1.requestSuccess)
        .catch(service_1.requestError);
}
exports.members = {
    get: async (apiToken, room_id) => {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/members`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    put: async (apiToken, room_id, members_admin_ids, options = {}) => {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/members`)
            .use((0, request_1.withToken)(apiToken))
            .send((0, service_1.objectToQuery)({ members_admin_ids, ...options }))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
};
exports.messages = {
    get: async (apiToken, room_id, options = {}) => {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/messages?${(0, service_1.objectToQuery)(options)}`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    post: async (apiToken, room_id, body, options = {}) => {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/messages`)
            .use((0, request_1.withToken)(apiToken))
            .send((0, service_1.objectToQuery)({ body, ...options }))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    read: {
        put: async (apiToken, room_id, options = {}) => {
            return superagent_1.default
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/read`)
                .use((0, request_1.withToken)(apiToken))
                .send((0, service_1.objectToQuery)({ ...options }))
                .then(service_1.requestSuccess)
                .catch(service_1.requestError);
        },
    },
    unread: {
        put: async (apiToken, room_id, message_id) => {
            return superagent_1.default
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/unread`)
                .use((0, request_1.withToken)(apiToken))
                .send((0, service_1.objectToQuery)({ message_id }))
                .then(service_1.requestSuccess)
                .catch(service_1.requestError);
        },
    },
    getWithId: async (apiToken, room_id, message_id) => {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    putWithId: async (apiToken, room_id, message_id, body) => {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use((0, request_1.withToken)(apiToken))
            .send((0, service_1.objectToQuery)({ body }))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    deleteWithId: async (apiToken, room_id, message_id) => {
        return superagent_1.default
            .delete(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
};
exports.tasks = {
    get: async (apiToken, room_id, options = {}) => {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks?${(0, service_1.objectToQuery)(options)}`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    post: async (apiToken, room_id, body, to_ids, options = {}) => {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/tasks`)
            .use((0, request_1.withToken)(apiToken))
            .send((0, service_1.objectToQuery)({ body, to_ids, ...options }))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    getWithId: async (apiToken, room_id, task_id) => {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
};
exports.files = {
    get: async (apiToken, room_id, options = {}) => {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/files?${(0, service_1.objectToQuery)(options)}`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    post: async (apiToken, room_id, file, options = {}) => {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/files`)
            .use((0, request_1.withToken)(apiToken))
            .send((0, service_1.objectToQuery)({ file, ...options }))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    getWithId: async (apiToken, room_id, file_id, options = {}) => {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/files/${file_id}?${(0, service_1.objectToQuery)(options)}`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
};
exports.link = {
    get: async (apiToken, room_id) => {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    post: async (apiToken, room_id, options = {}) => {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use((0, request_1.withToken)(apiToken))
            .send((0, service_1.objectToQuery)({ ...options }))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    put: async (apiToken, room_id, options = {}) => {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use((0, request_1.withToken)(apiToken))
            .send((0, service_1.objectToQuery)({ ...options }))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
    delete: async (apiToken, room_id) => {
        return superagent_1.default
            .delete(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use((0, request_1.withToken)(apiToken))
            .then(service_1.requestSuccess)
            .catch(service_1.requestError);
    },
};
