import HTag from '../hTag/HTag';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

const Card = ({ price, rate, img, title, description }: CardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles['card-top']}>
				<img className={styles.img} src={`/${img}`} alt="" />
				<div className={styles.price}>{price} <span>₽</span></div>
				<div className={styles.rate}>
					<span>{rate}</span>
					<img src="/rate-star.svg" alt="Иконка рейтинга" />
				</div>
			</div>
			<div className={styles['card-bottom']}>
				<HTag tag='h2'>{title}</HTag>

				<div className={styles.desc}>
					{description}
				</div>
			</div>
		</div>
	);
};

export default Card;