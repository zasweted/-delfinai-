import M2 from "./M2";

function M1 ({kas}){
    return <M2 kas={kas}></M2> // M1(app.jsx) perdoda propsa kas="penki i M1, o M1 perduoda i M2"
};
export default M1;