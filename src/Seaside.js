import { useEffect, useState, useRef } from "react";
import fish1 from "./goldfish.png";
import fish2 from "./yellow-fish.png";
import algae from "./algae.png";
import seashell from "./seashell.png";


export default function Seaside(){

    const inputRef = useRef();

    const [ userInput, setUserInput ] = useState();
    const [ sorrow, setSorrow ] = useState();

    useEffect(() => {
        const intervalID = setInterval(() => {
            setSorrow();
        }, 9000);
        return () => clearInterval(intervalID);
    }, [sorrow]);


    function handleChange(e){
        setUserInput(e.target.value);
    }

    function handleClick(){
        if(userInput){
            setSorrow(userInput)
        }
        setUserInput("");
        inputRef.current.value = "";
    }


    return(
    <div className="seaside">
        <input type="text" ref={inputRef} onChange={handleChange}/>
        <button onClick={handleClick}>drown your sorrow</button>
        <div className="sorrow-container">
            {sorrow && <div className="sorrow">{sorrow}</div>}
            <img id="fish-1" src={fish1} alt="fish"/>
            <img id= "fish-2" src={fish2} alt="fish"/>
            <img id="algae" src={algae} alt="algae"/>
            <img id="seashell" src={seashell} alt="seashell"/>
        </div>
    </div>);

}