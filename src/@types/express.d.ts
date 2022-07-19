declare namespace Express {
  export interface Request {
    user?: any;
    token: string;
    file: string | Blob;
  }
  export interface Response {
    user: any;
  }
}
