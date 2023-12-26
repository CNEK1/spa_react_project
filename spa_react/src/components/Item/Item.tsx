import './item.css';
import { ItemProps } from './Item.props';

function Item({title, date, text}:ItemProps):JSX.Element {
	const formatedDate = date.toLocaleString('en-US');
	return (
		<>
			<h2 className='item__header'>{title}</h2>
			<h2 className='item__body'>
				<div className='item__date'>{formatedDate}</div>
				<div className='item__text'>{text}</div>
			</h2>
		</>
	);
}
export default Item;