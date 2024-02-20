import { Link } from 'react-router-dom';
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

const Register = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>({
		resolver: yupResolver(registerSchema)
	});


	const onSubmit: SubmitHandler<RegisterFormProps> = (data) => {
		console.log(data);
	};

	return (
		<div className={styles.login}>
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