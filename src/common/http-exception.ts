export default class HttpException extends Error {
  //field
  statusCode?: number;
  status?: number;
  message: string;
  error: string | null;

  constructor(statusCode: number, message: string, error?: string) {
    // super(message);
    super();

    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
  }
}
