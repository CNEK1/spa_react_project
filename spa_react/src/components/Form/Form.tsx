/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './form.module.css';
import Button from '../Button/Button';
import { FormProps } from './Form.props';
import Memory from '../../types/global';
import { useEffect, useReducer } from 'react';
import classNames from 'classnames';
import { INITIAL_STATE, formReducer } from './Form.state';
import { FormActionKind } from './Form.state.inteface';

function Form({ onSubmit }: FormProps): JSX.Element {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;

    useEffect(() => {
        let timeId: number;
        if (!isValid.title || !isValid.text || !isValid.date) {
            timeId = setTimeout(() => {
                dispatchForm({ type: FormActionKind.RESET_VALIDITY });
            }, 4000);
        }
        return () => {
            clearTimeout(timeId);
        };
    }, [isValid]);
    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
        }
    }, [isFormReadyToSubmit]);
    const addNewMemory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.target instanceof HTMLFormElement) {
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            const memory: Memory = {
                id: 0,
                title: formProps.title as string,
                date: new Date(formProps.date as string).toString(),
                text: formProps.text as string
            };
            dispatchForm({ type: FormActionKind.SUBMIT, payload: memory });
        } else {
            console.error('Invalid Target');
        }
    };
    return (
        <form className={styles.form} onSubmit={addNewMemory}>
            <div>
                <input type="text" name="title" id="title" className={classNames(styles['input-title'], { [styles.invalid]: !isValid.title })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <span>Date</span>
                </label>
                <input type="date" name="date" id="date" className={classNames(styles.input, { [styles.invalid]: !isValid.date })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <span>Tags</span>
                </label>
                <input type="text" name="tag" id="tag" className={classNames(styles.input)} />
            </div>
            <textarea name="text" id="text" className={classNames(styles.textarea, { [styles.invalid]: !isValid.text })}></textarea>
            <Button>Save</Button>
        </form>
    );
}
export default Form;
