import { Link } from 'react-router-dom';
import HTag from '../../components/hTag/HTag';
import Input from '../../components/input/Input';
import Label from '../../components/label/Label';
import Button from '../../components/button/Button';
import styles from './Register.module.css';
import Form from '../../components/form/Form';

const Register = () => {
	return (
		<div className={styles.login}>
			<HTag tag='h1'>Регистрация</HTag>
			<Form>
				<div className={styles['form-group']}>
					<Label text='Ваш email'>
						<Input placeholder='Email' />
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваш пароль'>
						<Input placeholder='Пароль' />
					</Label>
				</div>

				<div className={styles['form-group']}>
					<Label text='Ваше имя'>
						<Input placeholder='Имя' />
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