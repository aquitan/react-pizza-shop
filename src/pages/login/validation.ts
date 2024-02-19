import * as yup from 'yup';

export const loginSchema = yup.object({
	email: yup.string().email('Проверьте правильность вашего email').required('Поле не может быть пустым'),
	password: yup.string().required('Поле не может быть пустым')
}).required();