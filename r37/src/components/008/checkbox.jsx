import { useEffect } from "react";
import { useState } from "react";

function CheckBox(){

    const [cb, setCb] = useState({A:false, B:false, C:false, W:false});

    const handleInput = (e) => {
        setCb(c => ({...c, [e.target.value]: !c[e.target.value]}));
        

    }

    useEffect(() => {
        const box = [];
        for(const b in cb){
            if(true === cb[b]){
                box.push(b)
            }
            
        }
        setChecked(box)
    }, [cb])

    const [checked, setChecked] = useState([])

    return(

        <>
            <fieldset>
                <legend>Checked:
                    {
                        checked.map(b => <b key={b}>{b}</b>)
                    }
                </legend>
                A <input
                onChange={handleInput}
                checked={cb.A}
                style={{
                    width: '50px',
                    height: '50px'
                }} type="checkbox" value="A"></input>
                B <input
                onChange={handleInput}
                checked={cb.B}
                style={{
                    width: '50px',
                    height: '50px'
                }} type="checkbox" value="B"></input>
                C <input
                onChange={handleInput}
                checked={cb.C}
                style={{
                    width: '50px',
                    height: '50px'
                }} type="checkbox" value="C"></input>
                W <input
                onChange={handleInput}
                checked={cb.W}
                style={{
                    width: '50px',
                    height: '50px'
                }} type="checkbox" value="W"></input>
            </fieldset>
        </>


    );


};

export default CheckBox;