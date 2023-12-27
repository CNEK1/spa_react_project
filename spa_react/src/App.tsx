import Item from './components/Item/Item';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import List from './components/List/List';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/body/Body';
import Header from './components/Header/Header';
import AddButton from './components/AddButton/AddButton';
import Form from './components/Form/Form';
import { useState } from 'react';
import Memory from './types/global';


function App():JSX.Element {
  const [data, setData] = useState<Memory[]>([{title:'fgdgd',date:new Date(),text:'gfgf'}]);

  const addItem = (item:Memory):void => {
      setData(oldItems => [...oldItems,item]);
  };
  return (
    <div className='app'>
    <LeftPanel>
      <Header/>
      <AddButton>+ New Memory</AddButton>
      <List>
        {data ? data.map((elm) => 
          <CardButton><Item title={elm.title} date={elm.date} text={elm.text}/></CardButton>
        ) : <h1>No Memorys</h1>}
      </List>
    </LeftPanel>
    <Body>
      <Form onSubmit = {addItem}/>
    </Body>
    </div>
  );
}

export default App;

