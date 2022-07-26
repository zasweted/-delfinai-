import { useState } from "react";


function Select(){

    const [select, setSelect] = useState(10000)
    const [selected, setSelected] = useState(10000)

    const options = [
        {value: 1, text: 'One'},
        {value: 2, text: 'Two'},
        {value: 4, text: 'Four'},
        {value: 10000, text: 'Over 9 Thousand'},
    ];

    const handleInput = (e) => {
       setSelect(e.target.value)
       console.log(e.target.value);
    };


    return(


        <>
            
                <fieldset>
                    <legend>Selected: {selected}</legend>
                    <select 
                        onChange={handleInput}
                        value={select}
                        style={{
                        height: '50px',
                        fontSize: '30px'
                    }}>
                        {
                            options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)
                        }
                    </select>


                    <div>
                        <button
                            onClick={() => setSelected(options.find(o => select == o.value).text)}
                            style={{
                            marginTop: '10px',
                            padding: '10px 20px'

                        }}>Button</button>
                    </div>
                </fieldset>
            
        </>
    );


};

export default Select;