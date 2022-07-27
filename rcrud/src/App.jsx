import './App.scss';
import './bootstrap.css';
import Create from './Components/Create';
import AnimalsContext from './Context/AnimalsContext';

const animalTypes = [
  {id: 1, type: 'Antis'},
  {id: 2, type: 'Avys'},
  {id: 3, type: 'Antelope'},
  {id: 4, type: 'Bebras'},
  {id: 5, type: 'Briedis'},
  {id: 6, type: 'Bulius'},
]

function App() {

  return (
    <AnimalsContext.Provider value={{
      animalTypes
    }}>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create/>
        </div>
        <div className="col-8">
        </div>
      </div>
    </div>
    </AnimalsContext.Provider>

  );

}

export default App;
