import { Await, useLoaderData } from 'react-router-dom';
import Button from '../../components/button/Button';
import HTag from '../../components/hTag/HTag';
import Header from '../../components/header/Header';
import styles from './CardDetail.module.css';
import { Product } from '../../types/product.type';
import Rating from '../../components/rating/Rating';
import CardList from './cardList/CardList';
import { Suspense } from 'react';

const CardDetail = () => {
	const data = useLoaderData() as { data: Product };

	return (
		<Suspense fallback={<>Загрузка...</>}>
			<Await resolve={data.data}>
				{
					({ data }: { data: Product }) => (
						<>
							<Header>
								<HTag tag='h1'>{data.name}</HTag>
								<Button appearance='small'>
									<img src="/card-buy-icon.svg" alt="Иконка корзины" />
									В корзину
								</Button>
							</Header>

							<div className={styles.inner}>
								<div className={styles.left}>
									<img className={styles.image} src={data.image} alt="Фото продукта" />
								</div>

								<div className={styles.right}>
									<div className={styles.row}>
										<div className={styles.col}>Цена</div>
										<div className={styles.col}>{data.price} <span>₽</span></div>
									</div>
									<div className={styles.row}>
										<div className={styles.col}>Рейтинг</div>
										<div className={styles.col}>
											<Rating rating={data.rating} />
										</div>
									</div>
									<div className={styles.composition}>
										Состав:
									</div>
									<CardList items={data.ingredients} />
								</div>
							</div>
						</>
					)
				}

			</Await>
		</Suspense>
	);
};

export default CardDetail;