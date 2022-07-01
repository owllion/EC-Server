import { Request, Response } from "express";

interface Params {
  a: number;
  b: number;
}
type Add = (x: Params) => number;

const add: Add = (x) => {
  return x.a + x.b;
};
