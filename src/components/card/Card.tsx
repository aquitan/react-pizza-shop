import { Link } from 'react-router-dom';
import Button from '../button/Button';
import HTag from '../hTag/HTag';
import styles from './Card.module.css';
import { CardProps } from './Card.props';
import Rating from '../rating/Rating';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

const Card = ({ id, price, rating, image, name, ingredients }: CardProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(id));
	};

	return (
		<Link to={`/product/${id}`} className={styles.card}>
			<div className={styles['card-top']}>
				<div className={styles.buy}>
					<Button appearance='round' onClick={add}>
						<img src="/card-buy-icon.svg" alt="Иконка покупки" />
					</Button>
				</div>
				<img className={styles.image} src={`${image}`} alt="" />
				<div className={styles.price}>{price} <span>₽</span></div>
				<div className={styles.rate}>
					<Rating rating={rating} />
				</div>
			</div>
			<div className={styles['card-bottom']}>
				<HTag tag='h2'>{name}</HTag>

				<div className={styles.desc}>
					{ingredients.join(', ')}
				</div>
			</div>
		</Link>
	);
};

export default Card;