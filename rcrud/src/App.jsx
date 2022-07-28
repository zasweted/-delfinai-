import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import './bootstrap.css';
import Create from './Components/Create';
import AnimalsContext from './Context/AnimalsContext';
import { create } from './Functions/localStorage';
const keyLock = 'myFantasticZoo';

const animalTypes = [
  {id: 1, type: 'Antis'},
  {id: 2, type: 'Avys'},
  {id: 3, type: 'Antelope'},
  {id: 4, type: 'Bebras'},
  {id: 5, type: 'Briedis'},
  {id: 6, type: 'Bulius'},
]

function App() {

  const [createData, setCreateData] = useState(null);


  useEffect(() => {
    if(null === createData) {
      return;
    }
    create(keyLock, createData);
  }, [createData]);

  return (
    <AnimalsContext.Provider value={{
      animalTypes,
      setCreateData
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
