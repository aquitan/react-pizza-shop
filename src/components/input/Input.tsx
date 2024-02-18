import styles from './Input.module.css';
import classNames from 'classnames/bind';
import { InputProps } from './Input.props';
import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ name, type, placeholder, ...attrs }, ref) {
	const cx = classNames.bind(styles);

	return (
		<input {...ref} name={name} id={name} type={type} className={cx(styles.input)} placeholder={placeholder} {...attrs} />
	);
});

export default Input;