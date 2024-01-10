/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './form.module.css';
import Button from '../Button/Button';
import { FormProps } from './Form.props';
import Memory from '../../types/global';
import { useEffect, useReducer, useRef } from 'react';
import classNames from 'classnames';
import { INITIAL_STATE, formReducer } from './Form.state';
import { FormActionKind } from './Form.state.inteface';
import Input from '../Input/Input';

function Form({ onSubmit }: FormProps): JSX.Element {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;
    const titleRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);

    const focusError = (isValid: { text: boolean; title: boolean; date: boolean }) => {
        switch (true) {
            case !isValid.title:
                titleRef.current?.focus();
                break;
            case !isValid.date:
                dateRef.current?.focus();
                break;
            case !isValid.text:
                textRef.current?.focus();
                break;
        }
    };
    useEffect(() => {
        let timeId: number;
        if (!isValid.title || !isValid.text || !isValid.date) {
            focusError(isValid);
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
    }, [isFormReadyToSubmit, onSubmit, values]);

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
                <Input type="text" name="title" ref={titleRef} isValid={isValid.title} id="title" onChange={onChange} value={values.title} appereance="title" />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <span>Date</span>
                </label>
                <Input type="date" name="date" id="date" isValid={isValid.date} ref={dateRef} onChange={onChange} value={values.date} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <span>Tags</span>
                </label>
                <Input type="text" name="tag" id="tag" onChange={onChange} value={values.tag} />
            </div>
            <textarea name="text" id="text" onChange={onChange} ref={textRef} value={values.text} className={classNames(styles.textarea, { [styles.invalid]: !isValid.text })}></textarea>
            <Button>Save</Button>
        </form>
    );
}
export default Form;
