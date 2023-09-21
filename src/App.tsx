import './App.css';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'John',
    last: 'Dranreb',
  }

  const personList =[
    {
      first: 'John',
      last: 'Dranreb',
    },
    {
      first: 'John',
      last: 'Bernard',
    },
    {
      first: 'J',
      last: 'B',
    },
  ]

  return (
    <div className='App'>
     <Greet name='John' messageCount={20} isLoggedIn={false}/>
     <Person name={personName} />
     <PersonList names={nameList}
    </div>
  )
}

export default App;
