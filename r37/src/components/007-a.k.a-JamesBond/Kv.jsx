import { useEffect } from "react";
import { useState } from "react";
import randColor from "../../functions/randColor";

function Kv({ ind }){

    const [kv, setKv] = useState([])

    // useEffect(() => {
    //     console.log('as gyvas', ind);
    //     return () => {
    //         console.log('numiro', ind);
    //     }
    // }, [ind])
    return(

        <>
            <h1 onClick={() => setKv(k => [...k, randColor()])}>State</h1>
            <div className="kv-bin">
                {
                    kv.map((c, i) => <div className="kv" style={{
                        backgroundColor: c+'69',
                        borderColor: c
                    }} key={i} ind={i}></div>)
                }
            </div>
        </>

    );

};
export default Kv;