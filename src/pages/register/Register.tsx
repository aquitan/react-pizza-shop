import { Link, useNavigate } from 'react-router-dom';
import HTag from '../../components/hTag/HTag';
import Input from '../../components/input/Input';
import Label from '../../components/label/Label';
import Button from '../../components/button/Button';
import styles from './Register.module.css';
import Form from '../../components/form/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormProps } from './Register.props';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from './validation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getRegister } from '../../store/user.slice';
import { useEffect } from 'react';

const Register = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const { jwt, loginErrorMessage } = useSelector((state: RootState) => state.user);
	const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>({
		resolver: yupResolver(registerSchema)
	});


	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);

	const onSubmit: SubmitHandler<RegisterFormProps> = async (data) => {
		console.log(data);
		await sendRegister(data);
	};

	const sendRegister = async (data: RegisterFormProps) => {
		dispatch(getRegister({ name: data.name, email: data.email, password: data.password }));
	};

	return (
		<div className={styles.login}>
			{loginErrorMessage && <div className={styles['submit-error']}>{loginErrorMessage}</div>}
			<HTag tag='h1'>Регистрация</HTag>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles['form-group']}>
					<Label text='Ваш email'>
						<Input {...register('email')} placeholder='Email' />
						{errors.email ? <div className={styles.error}>{errors.email?.message}</div> : null}
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваш пароль'>
						<Input {...register('password')} placeholder='Пароль' />
						{errors.email ? <div className={styles.error}>{errors.email?.message}</div> : null}
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваше имя'>
						<Input {...register('name')} placeholder='Имя' />
						{errors.name ? <div className={styles.error}>{errors.name?.message}</div> : null}
					</Label>
				</div>

				<div className={styles.btn}>
					<Button>Зарегистрироваться</Button>
				</div>
			</Form>

			<div className={styles.links}>
				<span>Есть акканут?</span>
				<Link className={styles.link} to='/auth/login'>Вход</Link>
			</div>
		</div>
	);
};

export default Register;