import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';

const CardList = ({ items }: CardListProps) => {
	return (
		<ul className={styles.list}>
			{
				items.map((item) => (
					<li className={styles.item} key={item}>{item}</li>
				))
			}
		</ul>
	);
};

export default CardList;