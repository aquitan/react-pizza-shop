import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import HTag from '../../components/hTag/HTag';
import Input from '../../components/input/Input';
import Label from '../../components/label/Label';
import styles from './Login.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormProps } from './Login.props';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './validation';




const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
		resolver: yupResolver(loginSchema)
	});

	const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
		console.log('form', data);
	};

	return (
		<div className={styles.login}>
			<HTag tag='h1'>Вход</HTag>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles['form-group']}>
					<Label text='Ваш email'>
						<Input {...register('email')} name='email' placeholder='Email' />
						{errors.email?.message}
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваш пароль'>
						<Input {...register('password')} name='password' placeholder='Пароль' />
						{errors.password?.message}
					</Label>
				</div>

				<div className={styles.btn}>
					<Button>Вход</Button>
				</div>
			</Form>

			<div className={styles.links}>
				<span>Нет акканута?</span>
				<Link className={styles.link} to='/auth/register'>Зарегистрироваться</Link>
			</div>
		</div>
	);
};

export default Login;