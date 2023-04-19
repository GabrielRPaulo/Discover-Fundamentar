# Aula 1 (Introdução)

- O que é o Timers:
    * É uma maneira de trabalhar com o trmpo dentro do NodeJS.

- O que vai ser passado neste novo módulo ??
    * [] setTimeout
    * [] clearTimeout
    * [] setInterval
    * [] clearInterval

- E vai ser praticado um pouco mais de :
    * [] Assincronismo
    * [] Callbacks
# Aula 2 (setTimeout)

- O setTimeout rodará uma função depois de X milissegundos
- Código passado na Aula :
    const timeOut = 3000

    const finished = () => console.log ('done!')

    setTimeout(finished, timeOut)
- A função `finished` é uma função callback pois ele roda primeiro, mas só irá ser impressa no console apois 3s, por conta do `timeOut` de 3000.
# Aula 3 (clearTimeout)

- clearTimeout vai canselar um timeout, uma função que foi registrada por um timeout
- Código passado na Aula:
    const timeOut = 3000
    const finished = () => console.log ('done!')

    let timer = setTimeout(finished, timeOut)
    clearTimeout(timer) -> Apois rodar o `nede index.js (documento o qual estou utilizando a função)`, o processo finaliza automaticamente.
# Aula 4 (setInterval) 

- setInterval irá rodar uma função N vezes depois de X milessengundos.
- Código passado na aula: 
    const timeOut = 1000
    const checking = () => console.log ('checking!')

    setInterval(checking, timeOut) -> a cada 1s o 'checking' será impresso no console.
# Aula 5 (clearInterval)

- clearInterval irá cancelar o setInterval registrado, muito semelhante ao clearTimeout.
- Código passado na aula:
    const timeOut = 1000
    const checking = () => console.log ('checking!')

    let interval = setInterval(checking, timeOut)

    clearInterval(interval) -> Funcionará de forma parecida com o clearTimeout, cancelando automaticamente o processo.
- Caso queira cancelar depois de um tempo basta colocar o clearInterval dentro de um setTimeout dessa maneira:
    const timeOut = 1000
    const checking = () => console.log ('checking!')

    let interval = setInterval(checking, timeOut)


    setTimeout(() => clearInterval(interval), 5000)


