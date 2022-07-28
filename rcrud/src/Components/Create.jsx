import { useState } from "react";
import { useContext } from "react";
import AnimalsContext from "../Context/AnimalsContext";

function Create() {

    const { animalTypes, setCreateData } = useContext(AnimalsContext)
    const [type, setType] = useState(1)
    const [weight, setWeight] = useState('')
    const buttonClick = () =>{
        setCreateData({type, weight: parseFloat(weight)});
        setType(5);
        setWeight('')
    }
    return (

        <div style={{
            marginTop: '20px'
        }} className="card">
            <h5 className="card-header">Add New Animal</h5>
            <div className="card-body">
                <label>Our Types Of Animals</label>
                <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                    {
                        animalTypes.map(a => <option key={a.id} value={a.id}>{a.type}</option>)
                    }
                </select>
            <div className="form-group">
                <label>How Much Is The {animalTypes.find(a => a.id == type).type}?</label>
                <input type="number" className="form-control"></input>
                <small className="form-text text-muted">Please, enter your animal weigth in kg`s. here.</small>
            </div>
            </div>
            <button onClick={buttonClick} type="button" className="btn btn-danger">Add This Animal</button>
        </div>

    );


};
export default Create;