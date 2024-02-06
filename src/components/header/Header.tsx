import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

const Header = ({ children }: HeaderProps) => {
	return(
		<div className={styles.header}>
			{children}
		</div>
	);
};

export default Header;