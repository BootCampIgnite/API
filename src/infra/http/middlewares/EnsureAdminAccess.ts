import { Response, Request, NextFunction } from 'express';

import { UsersRepository } from '@modules/accounts/repositories/typeorm/UsersRepository';

class EnsureAdminAccess {
  static async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    const { id } = request.user;

    const user = await new UsersRepository().findById(id);

    if (!user.is_admin) {
      // Não faço ideia do pq não está funcionando assim
      // throw new AppException('This user is not an administrator!', 401);

      return response.status(401).json({
        status: 'error',
        message: 'This user is not an administrator!',
      });
    }

    return next();
  }
}

export { EnsureAdminAccess };
