import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;