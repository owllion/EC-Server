import AJV from "ajv";
import addFormats from "ajv-formats";
import { isEmpty } from "ramda";
const validateInput = (schema) => {
    const ajv = new AJV({ allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(schema);
    return (req, res, next) => {
        const data = req.body;
        if (isEmpty(data))
            return res.status(400).send({ msg: "Payload can not be empty" });
        const isValid = validate(data);
        if (!isValid) {
            console.log(validate.errors);
            return res.status(400).send({ msg: validate?.errors?.[0].message });
        }
        next();
    };
};
export default validateInput;
//# sourceMappingURL=validate.middleware.js.map