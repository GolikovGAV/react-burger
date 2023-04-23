import cn from 'classnames';
import s from './IngredientInfo.module.css';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';

function IngredientInfo() {
	return (
		<section className={cn(s.container)}>
			<IngredientDetails />
		</section>
	);
}

export default IngredientInfo;
