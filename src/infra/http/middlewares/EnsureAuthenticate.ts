import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppException } from '../../../shared/errors/AppException';

type TokenPayload = {
  sub: string;
};

class EnsureAuthenticate {
  static handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppException('Missing Bearer Token!', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
      const { sub } = verify(token, 'sasasas') as TokenPayload;

      request.user = {
        id: sub,
      };

      return next();
    } catch {
      throw new AppException('This Token is Invalid!', 401);
    }
  }
}

export { EnsureAuthenticate };
