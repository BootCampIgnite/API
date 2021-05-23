import { Response, Request, NextFunction } from 'express';

import { AppException } from '@shared/errors/AppException';

class ErrorHandler {
  static handle(
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction,
  ): Response {
    if (err instanceof AppException) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal Server Error - ${err.message}`,
    });
  }
}

export { ErrorHandler };
