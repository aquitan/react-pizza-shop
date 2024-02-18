import { LabelProps } from './Label.props';
import styles from './Label.module.css';

const Label = ({ children, text, ...attrs }: LabelProps) => {
	return(
		<label className={styles.label} {...attrs}>
			<span className={styles.text}>{text}</span>
			{children}
		</label>
	);
};

export default Label;