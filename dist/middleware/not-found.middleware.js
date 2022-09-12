export const notFoundHandler = (req, res, next) => {
    const message = "Resource not found";
    res.status(404).send({ msg: message });
};
//# sourceMappingURL=not-found.middleware.js.map