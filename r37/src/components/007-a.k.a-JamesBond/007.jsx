import './App.css';
import Count from './Count';
import Kv from './Kv';




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