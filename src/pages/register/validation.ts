import * as yup from 'yup';

export const registerSchema = yup.object({
	email: yup.string().email('Проверьте правильность вашего email').required('Поле не может быть пустым'),
	password: yup.string().required('Поле не может быть пустым'),
	name: yup.string().required('Поле не может быть пустым')
}).required();