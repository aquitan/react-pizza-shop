import { SearchProps } from './Search.props';
import styles from './Search.module.css';

const Search = ({ ...attrs }: SearchProps) => {
	return(
		<div className={styles.wrap}>
			<img className={styles.img} src="/search.svg" alt="" />
			<input className={styles.input} {...attrs} type="search" />
		</div>
	);
};

export default Search;