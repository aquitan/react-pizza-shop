import { LabelProps } from './Label.props';
import styles from './Label.module.css';

const Label = ({ children, ...attrs }: LabelProps) => {
	return(
		<label className={styles.label} {...attrs}>
			{children}
		</label>
	);
};

export default Label;