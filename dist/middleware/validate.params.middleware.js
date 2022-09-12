import AJV from "ajv";
import addFormats from "ajv-formats";
import { isEmpty } from "ramda";
const validateParams = (schema) => {
    const ajv = new AJV({ allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(schema);
    return (req, res, next) => {
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
//# sourceMappingURL=validate.params.middleware.js.map