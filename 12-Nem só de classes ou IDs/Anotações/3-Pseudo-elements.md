# Aula 1 (Pseudo-elements)

    * Pseudo-elements 
        -Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS
        
        ::pseudo-element-name
        
        💻 Exemplos

        ::before adiciona um pseudo-elemento antes do elemento selecionado.
        
        HTML
        
        <ul>
          <li>Gratidão</li>
          <li>Esperança</li>
          <li>Fé</li>
          <li>Liberdade</li>
        </ul>
        CSS
        
        li::before {
          content: "> "
        }
        ::after adiciona um pseudo-elemento depois do elemento selecionado.
        
        li::after{
          content: ";"
        }
        Tanto para o ::before quanto para o ::after é preciso adicionar o content, mesmo que ele seja vazio content = "";
        
        ::first-line pega a primeira linha de um texto.
        
        p::first-line {
            font-weight: bold;
        }

    * Referência:
        -[label](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)