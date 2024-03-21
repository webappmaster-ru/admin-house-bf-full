import { PropertyType } from '@prisma/client';

export interface GetHomesParam {
  city?: string;
  price?: {
    gte: number;
    lte: number;
  };
  property_type: PropertyType;
}
