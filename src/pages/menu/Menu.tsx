import { useEffect, useState } from 'react';
import HTag from '../../components/hTag/HTag';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import styles  from './Menu.module.css';
import { Product } from '../../types/product.type';
import { PREFIX } from '../../api/API';
import axios, { AxiosError } from 'axios';
import MenuList from './menuList/MenuList';



const Menu = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getData = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getData();
	}, []);


	return(
		<div className={styles.menu}>
			<Header>
				<HTag tag='h1'>Меню</HTag>
				<Search placeholder='Введите блюдо или состав'/>
			</Header>
			
			<div className={styles.products}>
				{
					error && <>{error}</>
				}
				{
					!isLoading && <MenuList products={products} />
				}
				{
					isLoading && <>Загружаем продукты...</>
				}

			</div>
		</div>
	);
};

export default Menu;