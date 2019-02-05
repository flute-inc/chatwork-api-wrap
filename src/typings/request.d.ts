import request from "superagent";
export declare const withToken: (apiToken: string) => (request: request.Request) => request.Request;
