import Card from '../../components/card/Card';
import HTag from '../../components/hTag/HTag';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import styles  from './Menu.module.css';

const menu = [
	{ price: 300, rate: 4.5, img: 'pizza-1.png', title: 'Наслаждение', description: 'Салями, руккола, помидоры, оливки' },
	{ price: 250, rate: 4.5, img: 'takos.png', title: 'Такос', description: 'Острый перец, лепёшка, фарш' }
];


const Menu = () => {
	return(
		<div className={styles.menu}>
			<Header>
				<HTag tag='h1'>Меню</HTag>
				<Search placeholder='Введите блюдо или состав'/>
			</Header>
			
			<div className={styles.products}>
				{
					menu.map(product => (
						<Card {...product} />
					))
				}


			</div>
		</div>
	);
};

export default Menu;