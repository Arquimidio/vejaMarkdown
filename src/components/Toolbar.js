import { useContext } from "react"
import { TextContext } from "../TextContext"

export default function Toolbar({ selection }){
    const { text, changeText } = useContext(TextContext)
    const [start, end] = selection

    // Glues the selection text that was changed by some of the tools
    function glue(newText, append=false){
        const left = text.slice(0, (append? end : start))
        const right = text.slice(end)
        changeText(left + newText + right)
    }


    // Gets the actually selected text from the textarea
    function getSelection(){
        return text.slice(start, end)
    }


    // Function used to create toolbar tools easily
    function makeTool(markdown, emptyText, options={double: true, newLine: false}){
        return () =>{
            const selected = getSelection()
            if(!options.newLine){
                const newText = `${markdown}${selected? selected : emptyText}${options.double? markdown : ''}`
                glue(newText)
            }else{
                const newText = `\n${markdown}\n`
                glue(newText, true)
            }
        }
    }

    // Creates all the tools in the toolbar
    const makeBold = makeTool('**', 'Texto em negrito')
    const makeItalic = makeTool('_', 'Texto em itálico')
    const makeInlineCode = makeTool('`', 'Código inline')
    const makeStrike = makeTool('~~', 'Texto riscado')
    const makeBlockQuote = makeTool('>', 'Citação', {double: false})
    const makeLink = makeTool('[Link](http://)', null, {newLine: true})
    const makeImage = makeTool('![Alt Text](http://)', null, {newLine: true})
    const makeUl = makeTool('- ', 'Nova lista não ordenada\n', { double: false })
    const makeOl = makeTool('1. ', 'Nova lista ordenada\n', { double: false })



    return(
        <div id="toolbar">
            <i onClick={makeBold} className="fa-solid fa-bold"></i>
            <i onClick={makeItalic} className="fa-solid fa-italic"></i>
            <i onClick={makeStrike} className="fa-solid fa-strikethrough"></i>
            <i onClick={makeInlineCode} className="fa-solid fa-code"></i>
            <i onClick={makeBlockQuote} className="fa-solid fa-quote-right"></i>
            <i onClick={makeLink} className="fa-solid fa-link"></i>
            <i onClick={makeImage} className="fa-solid fa-image"></i>
            <i onClick={makeUl} className="fa-solid fa-list-ul"></i>
            <i onClick={makeOl} className="fa-solid fa-list-ol"></i>
        </div>
    )
}