import { BodyProps } from './Body.props';
import './body.css';

function Body({children}:BodyProps):JSX.Element {
	return (
		<div className='body'>{children}</div>
	);
}
export default Body;