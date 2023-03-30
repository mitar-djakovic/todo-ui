import { object, string } from 'yup';

export const todoValidationSchema = object({
  todo: string()
    .min(1, 'Minimum amount of character is 1')
    .max(30, 'Maximum amount of character is 30')
    .required('Todo is required'),
});
