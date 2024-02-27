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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { login, userActions } from '../../store/user.slice';
import { RootState } from '../../store/store';

const Login = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, loginErrorMessage } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
		resolver: yupResolver(loginSchema)
	});

	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);

	const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
		await sendLogin(data);
		dispatch(userActions.clearLoginError());
	};

	const sendLogin = async (data: LoginFormProps) => {
		dispatch(login({ email: data.email, password: data.password }));
	};

	return (
		<div className={styles.login}>
			<HTag tag='h1'>Вход</HTag>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{loginErrorMessage && <div className={styles['submit-error']}>{loginErrorMessage}</div>}
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