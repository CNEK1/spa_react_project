import { ButtonProps } from './Button.props';
import './button.css';

function Button({children, onClick}:ButtonProps):JSX.Element {
	return (
		<button onClick={onClick}  className='button accent'>{children}</button>
	);
}
export default Button;