import { useState } from "react";

function Text(){

    const [text, setText] = useState('')

    const [color, setColor] = useState('#00aa00')

    const [title, setTitle] = useState('TEXT')

    const handleInput = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
        '' === e.target.value ? setTitle('TEXT') : setTitle(e.target.value);
    };

    const handleColorInput = (e) => {
        setColor(e.target.value)
    }


    return(


        <>
            <form>
                <fieldset>
                    <legend style={{color: color}}>{title}</legend>
                    <input
                    value={text}
                    onChange={handleInput}
                    style={{
                        height: '50px',
                        fontSize: '30px'
                    }} type="text" ></input>
                    <div>
                    <input
                    value={text}
                    onChange={handleColorInput}
                    style={{
                        width: '375px',
                        height: '50px',
                        fontSize: '30px'
                    }} type="color" ></input>
                    </div>
                </fieldset>
            </form>
        </>
    );

};

export default Text;