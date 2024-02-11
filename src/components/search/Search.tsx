import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { forwardRef } from 'react';

const Search = forwardRef<HTMLInputElement, SearchProps>(({ ...attrs }, ref) => {
	return (
		<div className={styles.wrap}>
			<img className={styles.img} src="/search.svg" alt="" />
			<input {...ref} className={styles.input} {...attrs} type="search" />
		</div>
	);
});

export default Search;