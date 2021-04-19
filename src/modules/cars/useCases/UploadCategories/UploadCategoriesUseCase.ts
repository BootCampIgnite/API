import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoryRepository } from '../../repositories/ICategoryRepository';

type UploadFile = Express.Multer.File;

type IUploadFile = {
  name: string;
  description: string;
};

class UploadCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

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

    categories.forEach(element => {
      const { name, description } = element;

      const categoryAlreadyExists = this.categoryRepository.findByname(name);

      if (!categoryAlreadyExists) {
        this.categoryRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { UploadCategoriesUseCase };
