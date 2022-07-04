export interface StudentInterface {
  name: string;
  age: number;
  address?: string;
}

export interface Teacher2Interface {
  name: string;
  subject: string;
  gender?: "male" | "female";
}
