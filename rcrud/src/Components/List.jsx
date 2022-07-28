import { useContext } from "react";
import AnimalsContext from "../Context/AnimalsContext";
import Line from "./Line";

function List() {

        const {animals} = useContext(AnimalsContext);

    return (

        <>
            <div style={{
                marginTop: '20px'
            }} className="card">
                <h5 className="card-header">List Of Animals</h5>
                <div className="card-body">
                    <ul class="list-group">
                        {
                            animals?.map(a => <Line key={a.id} data={a}></Line>)
                        }
                    </ul>
                </div>
            </div>
        </>

    );

};

export default List;