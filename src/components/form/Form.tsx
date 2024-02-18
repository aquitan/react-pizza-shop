import { FormProps } from './Form.props';
import styles from './Form.module.css';

const Form = ({ children, ...attrs }: FormProps) => {
	return (
		<form {...attrs} className={styles.form}>
			{children}
		</form>
	);
};

export default Form;