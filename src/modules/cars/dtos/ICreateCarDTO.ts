type ICreateCarDTO = {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  fk_category_id?: string;
};

export { ICreateCarDTO };
