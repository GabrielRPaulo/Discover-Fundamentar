# Aula 1 (first-child)

    :first-child
    É quando queremos selecionar o primeiro filho de um grupo de elementos.
    
    HTML
    
    <ul>
      <li>Gratidão</li>
      <li>Esperança</li>
      <li>Fé</li>
    </ul>

    CSS
    
    ul li:first-child {
      font-weight: bold;
    }
# Aula 2 (nth-of-type)

    *:nth-of-type()    
    Pega o elemento por tipo e posição
    
    HTML
    
    <ul>
      <h3>Palavras bonitas</h3>
      <li>Gratidão</li>
      <li>Esperança</li>
      <li>Fé</li>
    </ul>

    CSS
    
    ul li ou h3:nth-of-type(1) {
      font-weight: bold;
    } // Se ele quiser pegar o h3 é só substituir o 'li' por h3 no css
# Aula 3 (nth-child)


    *:nth-child()
    É quando queremos selecionar o primeiro filho de um grupo de elementos.
    
    HTML
    
    <ul>
        <h3>Palavras bonitas</h3>
      <li>Gratidão</li>
      <li>Esperança</li>
      <li>Fé</li>
    </ul>

    CSS
    
    ul li:nth-child(2) {
      font-weight: bold;
    } // Mesma coisa so outro exemplo.
# Aula 4 (nth-child odd e even)

    *:nth-child(odd) e :nth-child(even)
    even - números pares 
    odd - números ímpares
    // aplica a propriedade apenas para ou ímpar ou par.

    HTML
    
    <ul>
      <li>Gratidão</li>
      <li>Esperança</li>
      <li>Fé</li>
      <li>Liberdade</li>
    </ul>

    CSS
    
    ul li:nth-child(odd) {
      color: gray;
    }
# Aula 5 (hover e focus)

    Ações do usuário

    Algumas estilos só são aplicados quando o usuário faz alguma ação na página.
    
    :hover
    
    a:hover {
      color: red;
    }

    Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link
    
    :focus é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".
    
    input:focus {
      border-color: red;
    }
# Aula 6 (disabled e required)

    Também podemos usar atributos para selecionar elementos no CSS
    
    Atributos
    :disabled // Desabilita a informação
    
    HTML
    
    <input type="text" disabled>
    CSS
    
    input:disabled {
      background-color: green;
    }
    :required // Atributo de obrigatoriedade
    
    HTML
    
    <input type="text" required>
    CSS
    
    input:required {
      background-color: red;
    }
# Link das referêcias

    [label](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)