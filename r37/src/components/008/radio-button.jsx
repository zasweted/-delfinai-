import { useState } from "react";

function RadioButton(){

    const [radio, setRadio] = useState('A')

    const handleInput = (e) => {
        setRadio(e.target.value)
    }

    return(

        <>
            <fieldset className="radio">
                <legend> Radio:<b>{radio}</b></legend>
                    <label htmlFor="_a">A</label> <input style={{
                        width: '50px',
                        height: '50px'
                    }} type="radio" name="b" id="_a" value="A" onChange={handleInput} checked={radio === 'A'}></input>
                    <label htmlFor="_b">B</label> <input style={{
                        width: '50px',
                        height: '50px'
                    }} type="radio" name="b" id="_b" value="B" onChange={handleInput} checked={radio === 'B'}></input>
                    <label htmlFor="_c">C</label> <input style={{
                        width: '50px',
                        height: '50px'
                    }} type="radio" name="b" id="_c" value="C" onChange={handleInput} checked={radio === 'C'}></input>
                
            </fieldset>
        </>


    );

};

export default RadioButton;