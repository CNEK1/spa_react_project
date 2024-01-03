import { LeftPanelProps } from './LeftPanel.props';
import styles from './leftPanel.module.css';

function LeftPanel({ children }: LeftPanelProps): JSX.Element {
    return <div className={styles['left-panel']}>{children}</div>;
}
export default LeftPanel;
