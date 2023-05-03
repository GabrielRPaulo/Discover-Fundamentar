const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const items = [
    {
        title: 'D',
        messege: 'esenvolvendo aplicações/serviços de forma fácil.'
    },
    {
        title: 'E',
        messege: 'JS me permite criar templates reutilizáveis e reduzir a quantidade de código duplicado em meus projetos.'
    },
    {
        title: 'M',
        messege: 'eus projetos ficaram mais organizados e fáceis de manter desde que comecei a usar EJS.'
    },
    {
        title: 'A',
        messege: 'integração do EJS com o Node.js me permitiu criar aplicações web incríveis em pouco tempo.'
    },
    {
        title: 'I',
        messege: 'ntegrar EJS com outras bibliotecas e frameworks é fácil e me permite criar aplicações web mais complexas.'
    },
    {
        title: 'S',
        messege: 'e você quer uma ferramenta poderosa e flexível para lidar com templates em Javascript para suas páginas da web, escolha EJS.'
    }
];
    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS."
    res.render('pages/index', {
        qualitys: items, 
        subtitle: subtitle,
    })
});

app.get('/sobre', (req, res) => {
    res.render('pages/about')
});

app.listen(8080);
console.log("Rodando")