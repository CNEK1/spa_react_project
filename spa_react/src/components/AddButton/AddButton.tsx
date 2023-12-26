import CardButton from '../CardButton/CardButton';
import { AddButonProps } from './AddButton.props';
import './addButton.css';

function AddButton({children}:AddButonProps):JSX.Element {
	return (
		<CardButton className='add'>{children}</CardButton>
	);
}
export default AddButton;