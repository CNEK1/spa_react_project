import { ListProps } from './List.props';
import './list.css';

function List({children}:ListProps):JSX.Element {
	return (
		<div className='list'>
			{children}
		</div>
	);
}
export default List;