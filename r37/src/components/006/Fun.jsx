import { useState } from "react";
// const btn = {padding: '15px 40px', borderRadius: '50%'}
function Fun({spalva, setCount}){


    const [bg, setBg] = useState('green');
    const changeB = () => {
        setBg(b => b === 'green' ? 'crimson' : 'green');  
    };
    
    const addOne = () => {
        setCount(c => c + 1)
    };
    

    return(
        <>
        <h2 style={{
            color: spalva,
            backgroundColor: bg,
            
        }}>FUN</h2>
        <button onClick={changeB}>Change Color</button>
        <button onClick={addOne}>Click Me</button>
        </>
    );

};

export default Fun;