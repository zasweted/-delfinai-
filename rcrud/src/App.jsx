import './App.scss';
import './bootstrap.css';
import Create from './Components/Create';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create/>
        </div>
        <div className="col-8">
        </div>
      </div>
    </div>

  );

}

export default App;
