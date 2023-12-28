/* eslint-disable @typescript-eslint/no-unused-vars */
import './form.css';
import Button from '../Button/Button';
import { FormProps } from './Form.props';
import Memory from '../../types/global';
import { useState } from 'react';

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
        <form className="form" onSubmit={addNewMemory}>
            <input type="text" name="title" style={{ border: formValidState.title ? undefined : '3px solid red' }} />
            {}
            <input type="date" name="date" style={{ border: formValidState.date ? undefined : '3px solid red' }} />
            <input type="text" name="tag" />
            <textarea name="text" id="" style={{ border: formValidState.text ? undefined : '3px solid red' }}></textarea>
            <Button>Save</Button>
        </form>
    );
}
export default Form;
