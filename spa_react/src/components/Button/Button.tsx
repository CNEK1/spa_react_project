import { ButtonProps } from './Button.props';
import './button.css';

function Button({children}:ButtonProps):JSX.Element {
	return (
		<button className='button accent'>{children}</button>
	);
}
export default Button;