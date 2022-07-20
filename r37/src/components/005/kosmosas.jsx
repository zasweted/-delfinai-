import rand from "../../functions/rand";

function Kosmosas({spalva, krastas}) {

    return (
        <>
            <div style={
            {
                color: spalva, 
                backgroundColor: 'skyblue', 
                lineHeight: '15px', 
                padding: krastas,
                fontSize: rand(10, 50) + 'px',
            }
            }>MAR-SAS</div>
            <div>KOS-MO</div>
        </>

    );


};

export default Kosmosas;