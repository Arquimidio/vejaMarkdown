import { createContext, useState } from "react"
const TextContext = createContext()

const STARTING_TEXT = `
# Bem-vindo ao meu visualizador de markdown!

## Este é um subtítulo...
### E tem outras coisas legais:
    

Esse é código inline: \`<div></div>\`

\`\`\`
// Esse é um código multilinha:
function anotherExample(firstLine, lastLine) {
    if (firstLine == 'something' && lastLine == 'anotherthing') {
    return multiLineCode;
    }
}
\`\`\`
    
Você também pode deixar o texto em **negrito**... Uau!

Ou _itálico_.

Ou... espera aí... **_Ambos!_**

E sinta-se livre para ~~sair riscando as coisas~~.

Por fim, temos [links](https://github.com/Arquimidio)
    
E se você quiser ir além, pode até fazer tabelas:
    
| Essa | é | uma | tabela |
| --- | --- | ---  | --- |
| e | isso | é | absolutamente|
|  sen  | sa | cio | nal |

- E, claro, temos listas.
    - Algumas com bullet points.
        - Outras com níveis diferentes de indentação.
            - Que se parecem com isso.
    
    
1. Também temos listas ordenadas.
1. Podemos usar apenas 1, se quisermos!
1. Tudo isso e muito mais!

> Block quote

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
// Context used to track the text in the textarea
function TextContextProvider({ children }){
    const [text, setText] = useState(STARTING_TEXT)

    function changeText(newText){
        setText(newText)
    }

    return(
        <TextContext.Provider value={{text, changeText}}>
            { children }
        </TextContext.Provider>
    )
}

export {TextContext, TextContextProvider}