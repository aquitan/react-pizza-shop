import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Button from '../button/Button';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { UserJwtState, getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';
import { loadState } from '../../store/storage';

const Sidebar = () => {
	const navigate = useNavigate();
	const { user } = useSelector((state: RootState) => state.user);
	const { items } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch<AppDispatch>();


	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};


	useEffect(() => {
		dispatch(getProfile({ jwt: loadState<UserJwtState>('userData')?.jwt }));
	}, [dispatch]);

	return(
		<div className={styles.sidebar}>
			<div>
				<div className={styles.user}>
					<img className={styles.avatar} src="/avatar.png" alt="Аватар пользователя" />
					<div className={styles.name}>
						{user?.name}
					</div>
					<div className={styles.email}>{user?.email}</div>
					<div className={styles.email}>{user?.phone}</div>
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
					<div>{items.reduce((sum, item) => sum += item.count, 0)}</div>
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