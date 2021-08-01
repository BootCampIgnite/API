type ICreateCarDTO = {
  name: string;
  description: string;
  daily_rate: number;
  is_available?: boolean;
  license_plate: string;
  fine_amount: number;
  brand: string;
};

export { ICreateCarDTO };
