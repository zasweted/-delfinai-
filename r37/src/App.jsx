import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import M1 from './components/009/M1';
import PirmasisKontekstas from './Contexts/PirmasisKontekstas';


    

function App() {

    const good = useRef();
    const myButton = good.current;
    console.log(myButton);

    const blaSuper = useRef(5);
    let bla = 5;
    const [count, setCount] = useState(0)
    const click = () => {
        setCount(a => a + 1);
        bla++;
        blaSuper.current++;
        console.log('bla', bla);
        console.log('blaSuper', blaSuper.current);
    }
  
  return (
    <PirmasisKontekstas.Provider value={{
        pirmas: 'Valio',
        spalva: 'crimson'
    }}>
    <div className="App">
      <header className="App-header">
        <h1>useContext & useRef {count}</h1> 
        <M1 kas="Penki"></M1> 
        <button ref={good} onClick={click}>+1</button>
        
      </header>
    </div>
    </PirmasisKontekstas.Provider>
  );
}

export default App;