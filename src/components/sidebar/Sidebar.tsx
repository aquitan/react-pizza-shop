import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Button from '../button/Button';
import cx from 'classnames';

const Sidebar = () => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('jwt');
		navigate('/auth/login');
	};

	return(
		<div className={styles.sidebar}>
			<div>
				<div className={styles.user}>
					<img className={styles.avatar} src="/avatar.png" alt="Аватар пользователя" />
					<div className={styles.name}>
						Сергей
					</div>
					<div className={styles.email}>aquitan@mail.ru</div>
				</div>

				<div className={styles.menu}>
					<NavLink className={({ isActive }) => cx(styles['menu-item'], { [styles.active]: isActive })} to="/">
						<img src="/menu-icon.svg" alt="Иконка меню" />
						<span>Меню</span>
					</NavLink>
					<NavLink className={({ isActive }) => cx(styles['menu-item'], { [styles.active]: isActive })} to="/cart">
						<img src="/cart-icon.svg" alt="Иконка корзины" />
						<span>Корзина</span>
					</NavLink>
				</div>
			</div>

			<Button appearance='exit' onClick={logout}>
				<img src="/switch-icon.svg" alt="" />
				Выход
			</Button>
		</div>
	);
};

export default Sidebar;