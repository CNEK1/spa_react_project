import './form.css';
import Button from '../Button/Button';
import { FormProps } from './Form.props';
import Memory from '../../types/global';


function Form({onSubmit}:FormProps):JSX.Element {
const addNewMemory = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	if(e.target instanceof HTMLFormElement){

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		const memory: Memory = {
			id: 0,
			title: formProps.title as string,
			date: new Date(formProps.date as string),
			text: formProps.text as string};
		onSubmit(memory);
	} else{
		console.error('Invalid Target');
	}
 };
	return (
		<form className='form' onSubmit={addNewMemory}>
			<input type='text' name='title'/>
			<input type='date' name='date'/>
			<input type='text' name='tag'/>
			<textarea name='text' id=''></textarea>
			<Button>Save</Button>		
		</form>
	);
}
export default Form;