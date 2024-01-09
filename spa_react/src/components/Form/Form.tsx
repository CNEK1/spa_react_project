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
            dispatchForm({ type: FormActionKind.CLEAR });
        }
    }, [isFormReadyToSubmit]);

    const onChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
            //Should change this line later
            dispatchForm({ type: FormActionKind.SET_VALUES, payload: { [e.target.name]: e.target.value } as unknown as Memory });
        }
    };
    const addNewMemory = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatchForm({ type: FormActionKind.SUBMIT });
    };
    return (
        <form className={styles.form} onSubmit={addNewMemory}>
            <div>
                <input type="text" name="title" id="title" onChange={onChange} value={values.title} className={classNames(styles['input-title'], { [styles.invalid]: !isValid.title })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <span>Date</span>
                </label>
                <input type="date" name="date" id="date" onChange={onChange} value={values.date} className={classNames(styles.input, { [styles.invalid]: !isValid.date })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <span>Tags</span>
                </label>
                <input type="text" name="tag" id="tag" onChange={onChange} value={values.tag} className={classNames(styles.input)} />
            </div>
            <textarea name="text" id="text" onChange={onChange} value={values.text} className={classNames(styles.textarea, { [styles.invalid]: !isValid.text })}></textarea>
            <Button>Save</Button>
        </form>
    );
}
export default Form;
