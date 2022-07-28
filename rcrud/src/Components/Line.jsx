import { useContext } from "react";
import AnimalsContext from "../Context/AnimalsContext";

function Line({ data }) {

    const { animalTypes } = useContext(AnimalsContext)
    return (

        <li className="list-group-item">
            <div className="line">
                <div className="line__content"></div>
                <span className="line__content title">{animalTypes.find(a => a.id == data.type).type}</span>
                <span className="line__content w">{data.weight} Kg.</span>
                <div className="line_buttons">
                    <button style={{
                        backgroundColor: 'green',
                        border: 'green',
                        marginRight: '15px'
                    }} type="button" className="btn btn-danger">edit</button>
                    <button style={{
                        backgroundColor: 'red'
                    }} type="button" className="btn btn-danger">remove</button>

                </div>
            </div>
        </li>
    );

};

export default Line;