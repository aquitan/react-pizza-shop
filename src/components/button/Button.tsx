import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { ButtonProps } from './Button.props';

const Button = ({ children, appearance, ...attrs }:ButtonProps) => {
	const cx = classNames.bind(styles);
	const style = cx(styles.button, appearance);

	return (
		<button {...attrs} className={style}>
			{children}
		</button>
	);
};

export default Button;