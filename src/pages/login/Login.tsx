import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import HTag from '../../components/hTag/HTag';
import Input from '../../components/input/Input';
import Label from '../../components/label/Label';
import styles from './Login.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: ''
	});

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('form', data);
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData({
			...data, [e.target.name]: e.target.value
		});
	};

	return (
		<div className={styles.login}>
			<HTag tag='h1'>Вход</HTag>
			<Form onSubmit={onSubmit}>
				<div className={styles['form-group']}>
					<Label text='Ваш email'>
						<Input name='email' value={data.email} onChange={onChange} placeholder='Email' />
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваш пароль'>
						<Input name='password' value={data.password} onChange={onChange} placeholder='Пароль' />
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