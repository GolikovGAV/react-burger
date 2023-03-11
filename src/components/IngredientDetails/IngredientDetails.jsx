import s from './IngredientDetails.module.css';
import cn from 'classnames';
import close from '../../images/close.svg';

function IngredientDetails({ data, onClick }) {
	return (
		<>
			<div className={cn(s.title, 'mt-10 ml-10 mr-10')}>
				<p className='text text_type_main-large'>Детали ингредиента</p>
				<button className={cn(s.close)} onClick={onClick}>
					<img src={close} alt='Закрыть' />
				</button>
			</div>
			<img className={s.image} src={data.image} alt={data.name} />
			<p className='text text_type_main-medium mt-4'>{data.name}</p>
			<div className={cn(s.nutrition, 'mb-15 mt-8')}>
				<p className='text text_type_main-default'>Калории,ккал</p>
				<p className='text text_type_main-default'>Белки, г</p>
				<p className='text text_type_main-default'>Жиры, г</p>
				<p className='text text_type_main-default'>Углеводы, г</p>
				<p className='text text_type_digits-default'> {data.calories}</p>
				<p className='text text_type_digits-default'> {data.proteins}</p>
				<p className='text text_type_digits-default'> {data.fat}</p>
				<p className='text text_type_digits-default'>{data.carbohydrates}</p>
			</div>
		</>
	);
}

export default IngredientDetails;
