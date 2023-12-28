import { LeftPanelProps } from './LeftPanel.props';
import './leftPanel.css';

function LeftPanel({ children }: LeftPanelProps): JSX.Element {
    return <div className="left-panel">{children}</div>;
}
export default LeftPanel;
