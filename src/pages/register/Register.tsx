import { Link } from 'react-router-dom';
import HTag from '../../components/hTag/HTag';
import Input from '../../components/input/Input';
import Label from '../../components/label/Label';
import Button from '../../components/button/Button';
import styles from './Register.module.css';
import Form from '../../components/form/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormProps } from './Register.props';

const Register = () => {
	const { register, handleSubmit } = useForm<RegisterFormProps>();


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
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваш пароль'>
						<Input {...register('password')} placeholder='Пароль' />
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваше имя'>
						<Input {...register('name')} placeholder='Имя' />
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