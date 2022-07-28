import './bootstrap.css';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import Edit from './Components/Edit';
import List from './Components/List';
import AnimalsContext from './Context/AnimalsContext';
import { create, destroy, read } from './Functions/localStorage';
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

  const [modalData, setModalData] = useState(null);

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    setAnimals(read(keyLock))
  }, [lastUpdate]);


  useEffect(() => {
    if(null === createData) {
      return;
    }
    create(keyLock, createData);
    setLastUpdate(Date.now())
  }, [createData]);

  useEffect(() => {
    if(null === deleteData) {
      return;
    }
    destroy(keyLock, deleteData);
    setLastUpdate(Date.now())
  }, [deleteData]);

  return (
    <AnimalsContext.Provider value={{
      animalTypes,
      setCreateData,
      animals,
      setDeleteData,
      modalData,
      setModalData
    }}>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create/>
        </div>
        <div className="col-8">
          <List/>
          <Edit/>
        </div>
      </div>
    </div>
    
    </AnimalsContext.Provider>

  );

}

export default App;
