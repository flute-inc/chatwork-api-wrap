import request from "superagent";
import { AUTHORIZATION_TOKEN } from "./constants";

export const withToken = (apiToken: string) => (request: request.Request) : request.Request => {
    return request.set(AUTHORIZATION_TOKEN, `Bearer ${apiToken}`);
};
