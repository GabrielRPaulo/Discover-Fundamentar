# Aula 1 e 2 (Criando e adicionando elementos na página)

    - createElement // Vai criar um elemento no HTML 
    - append // adiciona o elemento criado depois do ultimo elemento
    - prepend // adiciona o elemento criado antes do primeiro elemento.
    - insertBefore // adiciona antes de um determinado elemento já criado.

    - primeiro cria o elemento:
        *   const div = document.createElement("div");
            div.innerText = "Olá devs !!!" // adicionando algo dentro do elemento criado, mas ainda não é possivel olhar na página o  elemento criado.

        *   Adicionando o elemento na página: 
            const div = document.querySelector("body")
            
            body.append(div) // adiciona em último
            body.prepend(div) // adiciona em primeiro
    - Para adicionar no lugar que desejar:
        * primeiro pega o elemento que deseja: (no caso é o body)
            bodyInsertBefore(div, script) // recebe dois argumentos: o elemento novo que deseja colocar e onde ele deve ficar (nó de referência).
