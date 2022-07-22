import AJV from "ajv";
import addFormats from "ajv-formats";
import { NextFunction, Request, Response } from "express";
import { isEmpty } from "ramda";

const validateInput = (schema: object) => {
  const ajv = new AJV({ allErrors: true });
  addFormats(ajv);
  const validate = ajv.compile(schema);

  return (req: Request, res: Response, next: NextFunction) => {
    const data: {} = req.body;
    // console.log(data);

    if (isEmpty(data)) return res.status(400).send({ msg: "Can not be empty" });

    const isValid = validate(data);
    // console.log(isValid);

    if (!isValid)
      return res.status(400).send({ msg: validate?.errors?.[0].message });
    next();
  };
};
export default validateInput;
