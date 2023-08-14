import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_start: yup.date().nullable(),
  rental_end: yup.date().nullable(),
  bike_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
