import { BikeInterface } from 'interfaces/bike';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  bike_id?: string;
  customer_id?: string;
  rental_start?: any;
  rental_end?: any;
  created_at?: any;
  updated_at?: any;

  bike?: BikeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  bike_id?: string;
  customer_id?: string;
}
