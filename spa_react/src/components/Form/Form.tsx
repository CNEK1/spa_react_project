import { useState } from 'react';
import './form.css';
import Button from '../Button/Button';

function Form():JSX.Element {
const [input,setInput] = useState<string>('');

const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
 setInput(e.currentTarget.value);
};

const addNewMemory = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	if(e.target instanceof HTMLFormElement){
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	} else{
		console.error('Invalid Target');
	}
 };
	return (
		<form className='form' onSubmit={addNewMemory}>
			<input type='text' name='title'/>
			<input type='date' name='date'/>
			<input type='text' name='tag' value={input} onChange={inputChange} />
			<textarea name='post' id=''></textarea>
			<Button onClick={() => alert('clicked')}>Save</Button>		
		</form>
	);
}
export default Form;