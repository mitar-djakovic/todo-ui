import { object, string } from 'yup';

export const signupValidationSchema = object({
  fullName: string().required('Full name is required'),
  email: string().email().required('Email is required'),
  password: string()
    .min(6, 'Minimum amount of character is 6')
    .max(30, 'Maximum amount of character is 30')
    .required('Password is required'),
});
