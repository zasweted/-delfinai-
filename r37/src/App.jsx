import './App.css';
import Count from './components/007-a.k.a-JamesBond/Count';
import Kv from './components/007-a.k.a-JamesBond/Kv';




function App() {

   
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Kv></Kv>
        <Count start={127}></Count>
      </header>
    </div>
  );
}

export default App;