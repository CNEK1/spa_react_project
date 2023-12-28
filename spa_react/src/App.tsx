import './App.css';
import List from './components/List/List';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/body/Body';
import Header from './components/Header/Header';
import AddButton from './components/AddButton/AddButton';
import Form from './components/Form/Form';
import { useState } from 'react';
import Memory from './types/global';

function App(): JSX.Element {
    const [data, setData] = useState<Memory[]>([]);
    const addItem = (item: Memory): void => {
        setData((oldItems) => [
            ...oldItems,
            {
                id: oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
                text: item.text,
                title: item.title,
                date: new Date(item.date)
            }
        ]);
    };

    return (
        <div className="app">
            <LeftPanel>
                <Header />
                <AddButton>+ New Memory</AddButton>
                <List data={data} />
            </LeftPanel>
            <Body>
                <Form onSubmit={addItem} />
            </Body>
        </div>
    );
}

export default App;
