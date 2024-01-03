import { BodyProps } from './Body.props';
import styles from './body.module.css';

function Body({ children }: BodyProps): JSX.Element {
    return <div className={styles.body}>{children}</div>;
}
export default Body;
