import { useLoaderData } from 'react-router-dom';
import Button from '../../components/button/Button';
import HTag from '../../components/hTag/HTag';
import Header from '../../components/header/Header';
import styles from './CardDetail.module.css';
import { Product } from '../../types/product.type';

const CardDetail = () => {
	const data = useLoaderData() as Product;

	return (
		<div>
			<Header>
				<HTag tag='h1'>{data.name}</HTag>
				<Button appearance='small'>
					<img src="/card-buy-icon.svg" alt="Иконка корзины" />
					В корзину
				</Button>
			</Header>

			<div className={styles.inner}>
				<div className={styles.left}>
					<img src={data.image} alt="Фото продукта" />
				</div>

				<div className={styles.right}>

				</div>
			</div>
		</div>
	);
};

export default CardDetail;