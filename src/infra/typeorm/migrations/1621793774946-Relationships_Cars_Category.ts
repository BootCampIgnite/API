import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationshipsCarsCategory1621793774946
  implements MigrationInterface
{
  name = 'RelationshipsCarsCategory1621793774946';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cars" ADD "fk_category_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "cars" ADD CONSTRAINT "FK_1f54b0a59b63fee60f40eb95aac" FOREIGN KEY ("fk_category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars" DROP CONSTRAINT "FK_1f54b0a59b63fee60f40eb95aac"`,
    );
    await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "fk_category_id"`);
  }
}
