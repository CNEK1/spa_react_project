import classNames from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './button.module.css';

function Button({ children }: ButtonProps): JSX.Element {
    return <button className={classNames(styles.button, styles.accent)}>{children}</button>;
}
export default Button;
