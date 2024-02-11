import Card from '../../../components/card/Card';
import { MenuListProps } from './MenuList.props';

const MenuList = ({ products }: MenuListProps) => {
	return (
		products.map(product => (
			<Card key={product.id} {...product} />
		))
	);
};

export default MenuList;