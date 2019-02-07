import { Response, ResponseError } from "superagent";
export declare const requestSuccess: <T>(res: Response) => T | null;
interface ErrorResponseCallback {
    response: Response;
}
export declare const requestError: ({ response }: ErrorResponseCallback) => Promise<ResponseError>;
export declare const objectToQuery: (obj: object & {
    [key: string]: any;
}) => string;
export {};
