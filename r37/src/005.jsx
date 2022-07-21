import './App.css';
import Kosmosas from './components/005/kosmosas';

const mas = ['Pilkis', 'Murkis', 'Gagarinas'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Labas</h1>

        {
          mas.map((a, i)=> <h2 key={i}>{a}</h2>)
        }

        <Kosmosas spalva ="crimson" krastas="40px"></Kosmosas>
      </header>
    </div>
  );
}

export default App;
