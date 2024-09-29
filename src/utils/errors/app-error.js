const {StatusCode} = require('http-status-codes');

class AppError extends Error {
    constructor(
        name,
        message,
        explanation,
        statusCode
    ) {}
}