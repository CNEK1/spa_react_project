import { InputProps } from './Input.props';
import classnames from 'classnames';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

const Input = forwardRef(function Input({ className, isValid = true, appereance, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element {
    return (
        <div>
            <input ref={ref} className={classnames(className, styles.input, { [styles.invalid]: !isValid, [styles['input-title']]: appereance === 'title' })} {...props} />
        </div>
    );
});
export default Input;
