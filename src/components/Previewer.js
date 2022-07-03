import { useContext } from "react";
import { TextContext } from "../TextContext";
import { marked } from "marked";
import hljs from "highlight.js"
import "highlight.js/styles/github.css";

export default function Previewer(){
    const { text } = useContext(TextContext);

    // Sets the markdown parser options
    marked.setOptions({
        highlight: function(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'js';
            return hljs.highlight(code, { language }).value;
        },
        langPrefix: 'hljs language-',
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
    })

    const renderer = new marked.Renderer()
    renderer.link = function(href, title, text){
        return `<a target="_blank" href="${href}">${text}</a>`;
    }
    
    // Parses text plain text to markdown
    function getMarkdownText(){
        const raw = text;
        return {__html: marked(raw, {renderer: renderer})}
    }

    return (
        <div className="component-container previewer-container">
            <h2 className="title"><i className="fa-solid fa-eye"></i>Visualizador</h2>
            <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
        </div>
    )
}