import { CardButtonProps } from './CardButton.props';
import './cardbutton.css';

function CardButton({children, className}:CardButtonProps):JSX.Element {
	const cl = 'card-button' + (className ? ' ' + className : '');
	return (
		<button className={cl}>{children}</button>
	);
}
export default CardButton;