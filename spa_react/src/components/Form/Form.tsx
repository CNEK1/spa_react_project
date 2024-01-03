/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './form.module.css';
import Button from '../Button/Button';
import { FormProps } from './Form.props';
import Memory from '../../types/global';
import { useState } from 'react';
import classNames from 'classnames';

function Form({ onSubmit }: FormProps): JSX.Element {
    const [formValidState, setFormValidState] = useState({
        title: true,
        text: true,
        date: true
    });
    const addNewMemory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.target instanceof HTMLFormElement) {
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            let isFormValid = true;
            const memory: Memory = {
                id: 0,
                title: formProps.title as string,
                date: new Date(formProps.date as string),
                text: formProps.text as string
            };
            if (!memory.title?.trim().length) {
                setFormValidState((state) => ({ ...state, title: false }));
                isFormValid = false;
            } else {
                setFormValidState((state) => ({ ...state, title: true }));
            }
            if (memory.date.toString() === 'Invalid Date') {
                setFormValidState((state) => ({ ...state, date: false }));
                isFormValid = false;
            } else {
                setFormValidState((state) => ({ ...state, date: true }));
            }
            if (!memory.text?.trim().length) {
                setFormValidState((state) => ({ ...state, text: false }));
                isFormValid = false;
            } else {
                setFormValidState((state) => ({ ...state, text: true }));
            }
            if (!isFormValid) {
                return;
            }
            onSubmit(memory);
        } else {
            console.error('Invalid Target');
        }
    };
    return (
        <form className={styles.form} onSubmit={addNewMemory}>
            <div>
                <input type="text" name="title" id="title" className={classNames(styles['input-title'], { [styles.invalid]: !formValidState.title })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <span>Date</span>
                </label>
                <input type="date" name="date" id="date" className={classNames(styles.input, { [styles.invalid]: !formValidState.date })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <span>Tags</span>
                </label>
                <input type="text" name="tag" id="tag" className={classNames(styles.input)} />
            </div>
            <textarea name="text" id="text" className={classNames(styles.textarea, { [styles.invalid]: !formValidState.text })}></textarea>
            <Button>Save</Button>
        </form>
    );
}
export default Form;
