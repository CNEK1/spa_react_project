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
  const [data, setData] = useState<Memory[]>([{id:0,title:'Test Memory',date:new Date(),text:'Test Memory'}]);

  const addItem = (item:Memory):void => {
      setData(oldItems => [...oldItems,{
        id: Math.max(...oldItems.map(i => i.id)) + 1,
        text: item.text,
        title: item.title,
        date: new Date(item.date)
      }]);
  };
  const sortMemories = (a:Memory,b:Memory) => {
    if(a.date < b.date){
      return 1;
    } else{
      return -1;
    }
  };
  return (
    <div className='app'>
    <LeftPanel>
      <Header/>
      <AddButton>+ New Memory</AddButton>
      <List>
        {data ? data.sort(sortMemories).map((elm) => 
          <CardButton key={elm.id}><Item title={elm.title} date={elm.date} text={elm.text}/></CardButton>
        ) : <h1>No Memories</h1>}
      </List>
    </LeftPanel>
    <Body>
      <Form onSubmit = {addItem}/>
    </Body>
    </div>
  );
}

export default App;

