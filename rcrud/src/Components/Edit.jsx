import { useContext } from "react";
import AnimalsContext from "../Context/AnimalsContext";

function Edit() {

    const { modalData, setModalData } = useContext(AnimalsContext);

    if (null === modalData) {
        return null;
    }

    return (


        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button onClick={() => setModalData(null)} type="button">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setModalData(null)} type="button" className="btn btn-secondary">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>


    );

};

export default Edit;