import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnAvatarUserEntity1620814507345
  implements MigrationInterface
{
  name = 'AddColumnAvatarUserEntity1620814507345';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "avatar" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
  }
}
