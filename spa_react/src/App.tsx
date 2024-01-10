import styles from './App.module.css';
import List from './components/List/List';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/body/Body';
import Header from './components/Header/Header';
import AddButton from './components/AddButton/AddButton';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';
import Memory from './types/global';

function App(): JSX.Element {
    const [data, setData] = useState<Memory[]>([]);
    useEffect(() => {
        const localStorageData: Memory[] = JSON.parse(localStorage.getItem('data')!);
        console.log(localStorageData);
        if (localStorageData) {
            setData(
                localStorageData.map((item) => ({
                    ...item,
                    date: new Date(item.date).toISOString()
                }))
            );
        }
    }, []);
    useEffect(() => {
        if (data.length) {
            localStorage.setItem('data', JSON.stringify(data));
        }
    }, [data]);
    const addItem = (item: Memory): void => {
        setData((oldItems: Memory[]) => [
            ...oldItems,
            {
                id: oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
                text: item.text,
                tag: item.tag,
                title: item.title,
                date: new Date(item.date).toISOString()
            }
        ]);
    };

    return (
        <div className={styles.app}>
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
