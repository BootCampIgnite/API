import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBaseEntities1620733616144 implements MigrationInterface {
  name = 'CreateBaseEntities1620733616144';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying, "driver_license" character varying NOT NULL, "is_admin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_cb57bfbab569a799329f53d7744" UNIQUE ("driver_license"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "cars" ("id" uuid NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "daily_rate" integer NOT NULL, "is_available" boolean NOT NULL DEFAULT true, "license_plate" character varying NOT NULL, "fine_amount" integer NOT NULL, "brand" character varying NOT NULL, CONSTRAINT "UQ_bba34af5c8f612cc048f2c9ec83" UNIQUE ("name"), CONSTRAINT "UQ_97deb66a03be534e7c02d9add0a" UNIQUE ("license_plate"), CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" uuid NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "specifications" ("id" uuid NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_44e3bc32836e8579978ecc6c6cf" UNIQUE ("name"), CONSTRAINT "PK_621aabf71e640ab86f0e8b62a37" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "specifications"`);
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "cars"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
