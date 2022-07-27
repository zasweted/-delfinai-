import { useContext } from "react";
import PirmasisKontekstas from "../../Contexts/PirmasisKontekstas";

function M2({ kas }){

    const { pirmas, spalva } = useContext(PirmasisKontekstas);

    return <h2 style={{
        color: spalva
    }}>{kas} {pirmas}</h2>
};

export default M2;