"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
const constants_1 = require("./constants");
const service_1 = require("./service");
const request_1 = require("./request");
const BASE_ROOMS_URI = `${constants_1.BASE_URI}rooms`;
function get(apiToken) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(BASE_ROOMS_URI)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    });
}
exports.get = get;
function post(apiToken, name, members_admin_ids, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(BASE_ROOMS_URI)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery(Object.assign({ name, members_admin_ids }, options)))
            .then(service_1.requestSuccess);
    });
}
exports.post = post;
function getWithId(apiToken, room_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    });
}
exports.getWithId = getWithId;
function putWithId(apiToken, room_id, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery(Object.assign({}, options)))
            .then(service_1.requestSuccess);
    });
}
exports.putWithId = putWithId;
function deleteWithId(apiToken, room_id, action_type) {
    return __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .delete(`${BASE_ROOMS_URI}/${room_id}`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery({ action_type }))
            .then(service_1.requestSuccess);
    });
}
exports.deleteWithId = deleteWithId;
exports.members = {
    get: (apiToken, room_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/members`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
    put: (apiToken, room_id, members_admin_ids, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/members`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery(Object.assign({ members_admin_ids }, options)))
            .then(service_1.requestSuccess);
    }),
};
exports.messages = {
    get: (apiToken, room_id, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/messages?${service_1.objectToQuery(options)}`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
    post: (apiToken, room_id, body, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/messages`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery(Object.assign({ body }, options)))
            .then(service_1.requestSuccess);
    }),
    read: {
        put: (apiToken, room_id, options = {}) => __awaiter(this, void 0, void 0, function* () {
            return superagent_1.default
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/read`)
                .use(request_1.withToken(apiToken))
                .send(service_1.objectToQuery(Object.assign({}, options)))
                .then(service_1.requestSuccess);
        }),
    },
    unread: {
        put: (apiToken, room_id, message_id) => __awaiter(this, void 0, void 0, function* () {
            return superagent_1.default
                .put(`${BASE_ROOMS_URI}/${room_id}/messages/unread`)
                .use(request_1.withToken(apiToken))
                .send(service_1.objectToQuery({ message_id }))
                .then(service_1.requestSuccess);
        }),
    },
    getWithId: (apiToken, room_id, message_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
    putWithId: (apiToken, room_id, message_id, body) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery({ body }))
            .then(service_1.requestSuccess);
    }),
    deleteWithId: (apiToken, room_id, message_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .delete(`${BASE_ROOMS_URI}/${room_id}/messages/${message_id}`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
};
exports.tasks = {
    get: (apiToken, room_id, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks?${service_1.objectToQuery(options)}`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
    post: (apiToken, room_id, body, to_ids, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/tasks`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery(Object.assign({ body, to_ids }, options)))
            .then(service_1.requestSuccess);
    }),
    getWithId: (apiToken, room_id, task_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/tasks/${task_id}`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
};
exports.files = {
    get: (apiToken, room_id, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/files?${service_1.objectToQuery(options)}`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
    post: (apiToken, room_id, file, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/files`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery(Object.assign({ file }, options)))
            .then(service_1.requestSuccess);
    }),
    getWithId: (apiToken, room_id, file_id, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/files/${file_id}?${service_1.objectToQuery(options)}`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
};
exports.link = {
    get: (apiToken, room_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .get(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
    post: (apiToken, room_id, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .post(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery(Object.assign({}, options)))
            .then(service_1.requestSuccess);
    }),
    put: (apiToken, room_id, options = {}) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .put(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use(request_1.withToken(apiToken))
            .send(service_1.objectToQuery(Object.assign({}, options)))
            .then(service_1.requestSuccess);
    }),
    delete: (apiToken, room_id) => __awaiter(this, void 0, void 0, function* () {
        return superagent_1.default
            .delete(`${BASE_ROOMS_URI}/${room_id}/link`)
            .use(request_1.withToken(apiToken))
            .then(service_1.requestSuccess);
    }),
};
