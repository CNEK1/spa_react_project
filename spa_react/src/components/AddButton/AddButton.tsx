import CardButton from '../CardButton/CardButton';
import { AddButonProps } from './AddButton.props';
import styles from './addButton.module.css';

function AddButton({ children }: AddButonProps): JSX.Element {
    return <CardButton className={styles.add}>{children}</CardButton>;
}
export default AddButton;
