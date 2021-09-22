import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableChangeIntergerToDecimal1632288707302
  implements MigrationInterface
{
  name = 'AlterTableChangeIntergerToDecimal1632288707302';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."cars" DROP COLUMN "daily_rate"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."cars" ADD "daily_rate" numeric(12,2) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."cars" DROP COLUMN "fine_amount"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."cars" ADD "fine_amount" numeric(12,2) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."cars" DROP COLUMN "fine_amount"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."cars" ADD "fine_amount" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."cars" DROP COLUMN "daily_rate"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."cars" ADD "daily_rate" integer NOT NULL`,
    );
  }
}
