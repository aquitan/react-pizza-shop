import { Link, useNavigate } from 'react-router-dom';
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
import { PREFIX } from '../../api/API';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { LoginType } from '../../types/login.type';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';

const Login = () => {
	const [error, setError] = useState<string | null>(null);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
		resolver: yupResolver(loginSchema)
	});

	const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
		try {
			await sendLogin(data);
			setError(null);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.response?.data.message);
			}
		}
	};

	const sendLogin = async (data: LoginFormProps) => {
		const res = await axios.post<LoginType>(`${PREFIX}/auth/login`, data);
		localStorage.setItem('jwt', res.data.access_token);
		dispatch(userActions.addJwt(res.data.access_token));
		navigate('/');
	};

	return (
		<div className={styles.login}>
			<HTag tag='h1'>Вход</HTag>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{error && <div className={styles['submit-error']}>{error}</div>}
				<div className={styles['form-group']}>
					<Label text='Ваш email'>
						<Input {...register('email')} name='email' placeholder='Email' />
						{errors.email ? <div className={styles.error}>{errors.email?.message}</div> : null}
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваш пароль'>
						<Input {...register('password')} name='password' placeholder='Пароль' />
						{errors.password ? <div className={styles.error}>{errors.password?.message}</div> : null}
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