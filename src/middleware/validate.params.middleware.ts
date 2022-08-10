import AJV from "ajv";
import addFormats from "ajv-formats";
import { NextFunction, Request, Response } from "express";
import { isEmpty } from "ramda";

const validateParams = (schema: object) => {
  const ajv = new AJV({ allErrors: true });
  addFormats(ajv);
  const validate = ajv.compile(schema);

  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.params;
    if (isEmpty(data))
      return res.status(400).send({ msg: "Please enter a valid params" });

    const isValid = validate(data);

    if (!isValid) {
      console.log(validate.errors);
      return res.status(400).send({ msg: validate?.errors?.[0].message });
    }
    next();
  };
};

export default validateParams;
