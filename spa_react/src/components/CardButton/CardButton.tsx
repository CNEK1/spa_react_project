import { CardButtonProps } from './CardButton.props';
import styles from './cardbutton.module.css';
import classNames from 'classnames';

function CardButton({ children, className }: CardButtonProps): JSX.Element {
    const cl = classNames(styles['card-button'], className);
    return <button className={cl}>{children}</button>;
}
export default CardButton;
