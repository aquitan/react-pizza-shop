import HTag from '../../components/hTag/HTag';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import styles  from './Menu.module.css';

const Menu = () => {
	return(
		<div className={styles.menu}>
			<Header>
				<HTag tag='h1'>Меню</HTag>
				<Search placeholder='Введите блюдо или состав'/>
			</Header>
			
		</div>
	);
};

export default Menu;