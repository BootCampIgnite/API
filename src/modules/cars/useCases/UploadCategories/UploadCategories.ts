import csvParse from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../infra/typeorm/repositories/ICategoriesRepository';

type UploadFile = Express.Multer.File;

type IUploadFile = {
  name: string;
  description: string;
};

@injectable()
class UploadCategories {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoriesRepository,
  ) {}

  private loadDataStream(file: UploadFile): Promise<IUploadFile[]> {
    return new Promise((resolve, reject) => {
      const categories: IUploadFile[] = [];

      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async file => {
          const [name, description] = file;

          categories.push({ name, description });
        })
        .on('end', async () => {
          await fs.promises.unlink(file.path);

          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });

      return categories;
    });
  }

  async execute(file: UploadFile): Promise<void> {
    const categories = await this.loadDataStream(file);

    categories.forEach(async element => {
      const { name, description } = element;

      const categoryAlreadyExists = await this.categoryRepository.findByname(
        name,
      );

      if (!categoryAlreadyExists) {
        await this.categoryRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { UploadCategories };
