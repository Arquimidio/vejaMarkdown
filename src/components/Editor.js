import { useContext, useState } from "react";
import { TextContext } from "../TextContext";
import Toolbar from "./Toolbar";

export default function Editor(){
    const {text, changeText} = useContext(TextContext);
    const [selection, setSelection] = useState([0, 0])

    // Changes the text state tied to the textarea
    const changeTextValue = (event) => {
        const { target: { value } } = event;
        changeText(value)
    }

    // Changes the selection state tied to the textarea selection
    function changeSelection(event){
        const {target: {selectionStart, selectionEnd}} = event;
        setSelection([selectionStart, selectionEnd])
    }


    return (
        <div className="component-container editor-container">
            <div className="title">
                <h2>
                    <i className="fa-solid fa-marker"></i> 
                    <span>Editor</span>
                </h2> 
            </div>
            <Toolbar selection={selection}/>
            <textarea onSelect={changeSelection} id="editor" value={text} onChange={changeTextValue} placeholder="Escreva seu markdown aqui"/>
        </div>
    )
}