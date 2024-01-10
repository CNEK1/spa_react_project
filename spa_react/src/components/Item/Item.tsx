import styles from './item.module.css';
import { ItemProps } from './Item.props';

function Item({ title, date, text }: ItemProps): JSX.Element {
    const formatedDate = date.toLocaleString('en-GB').trimEnd().split('T')[0];
    return (
        <>
            <h2 className={styles.item__header}>{title}</h2>
            <h2 className={styles.item__body}>
                <div className={styles.item__date}>{formatedDate}</div>
                <div className={styles.item__text}>{text}</div>
            </h2>
        </>
    );
}
export default Item;
