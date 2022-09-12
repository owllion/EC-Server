export const errorHandler = (error, req, res, next) => {
    const status = error.statusCode || error.status || 500;
    res.status(status).send(error);
};
//# sourceMappingURL=error.middleware.js.map