import Memory from '../../types/global';
import CardButton from '../CardButton/CardButton';
import Item from '../Item/Item';
import { ListProps } from './List.props';
import './list.css';

function List({ data }: ListProps): JSX.Element {
    const sortMemories = (a: Memory, b: Memory) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    };
    return (
        <div className="list">
            {
                <>
                    {data.length > 0 ? (
                        data.sort(sortMemories).map((elm) => (
                            <CardButton key={elm.id}>
                                <Item title={elm.title} date={elm.date} text={elm.text} />
                            </CardButton>
                        ))
                    ) : (
                        <h1>No Memories</h1>
                    )}
                </>
            }
        </div>
    );
}
export default List;
