export default class HttpException extends Error {
    constructor(statusCode, message, error) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.error = error || null;
    }
}
//# sourceMappingURL=http-exception.js.map