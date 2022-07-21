import { useState } from "react";

function Fun({spalva}){


    const [bg, setBg] = useState('green');
    const changeB = () => {
        setBg(b => b === 'green' ? 'crimson' : 'green');  
    };
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(c => c + 1)
    }

    return(
        <>
        <h2 style={{
            color: spalva,
            backgroundColor: bg,
            
        }}>FUN {count}</h2>
        <button onClick={changeB}>Change Color</button>
        <button onClick={addOne}>Click Me</button>
        </>
    );

};

export default Fun;