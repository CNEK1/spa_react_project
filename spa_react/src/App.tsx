import Item from './components/Item/Item';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import List from './components/List/List';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/body/Body';
import Header from './components/Header/Header';
import AddButton from './components/AddButton/AddButton';
import Form from './components/Form/Form';

function App():JSX.Element {
  const data = 
  [
    {
    title: 'some title1',
    text: 'some text1',
    date: new Date()
  },
  {
    title: 'some title2',
    text: 'some text2',
    date: new Date()
  }];

  return (
    <div className='app'>
    <LeftPanel>
      <Header/>
      <AddButton>+ New Memory</AddButton>
      <List>
        <CardButton><Item title={data[0].title} date={data[0].date} text={data[0].text}/></CardButton>
        <CardButton><Item title={data[1].title} date={data[1].date} text={data[1].text}/></CardButton>
      </List>
    </LeftPanel>
    <Body>
      <Form/>
    </Body>
    </div>
  );
}

export default App;

