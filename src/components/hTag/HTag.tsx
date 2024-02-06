import { HTagProps } from './HTag.props';
import classNames from 'classnames/bind';
import styles from './HTag.module.css';

const HTag = ({ tag = 'h1', children }: HTagProps) => {
	const cx = classNames.bind(styles);

	const Tag = tag;

	return(
		<Tag className={cx(tag)}>{children}</Tag>
	);
};

export default HTag;