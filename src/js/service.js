"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToQuery = exports.requestError = exports.requestSuccess = void 0;
const constants_1 = require("./constants");
const requestSuccess = (res) => {
    if (res.status === constants_1.STATUS_CODE_200) {
        return res.body;
    }
    return null;
};
exports.requestSuccess = requestSuccess;
const requestError = ({ response }) => Promise.reject(response.error);
exports.requestError = requestError;
const objectToQuery = (obj) => {
    const keys = Object.keys(obj);
    const query = keys
        .filter((k) => obj[k] !== undefined)
        .map((k) => {
        const value = obj[k];
        const v = typeof value === "boolean"
            ? +value
            : Array.isArray(value)
                ? value.join(",")
                : value;
        return `${k}=${encodeURIComponent(v)}`;
    })
        .join("&");
    return query;
};
exports.objectToQuery = objectToQuery;
