import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';

const Rating = ({ rating = 0 }: RatingProps) => {
	return (
		<div className={styles.rate}>
			<span>{rating}</span>
			<img src="/rate-star.svg" alt="Иконка рейтинга" />
		</div>
	);
};

export default Rating;