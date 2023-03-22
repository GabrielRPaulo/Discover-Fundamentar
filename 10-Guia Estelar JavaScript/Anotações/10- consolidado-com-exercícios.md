# Exercício 1 (Sistema de notas escolares)

function obterNota(nota) {
    let notaElevada = nota >= 90 && nota <=100
    let notaMediaAlta = nota < 90 && nota >= 80
    let notaMedia = nota < 80 && nota >= 70
    let notaMediaBaixa = nota < 70 && nota >= 60
    let notaBaixa = nota < 60 && nota >= 00
    
    let notaFinal;
    
    if(notaElevada) {
        notaFinal = "A"
    } else if(notaMediaAlta) {
        notaFinal = 'B'
    } else if(notaMedia) {
        notaFinal = 'C'
    } else if(notaMediaBaixa) {
        notaFinal = 'D'
    } else if(notaBaixa) {
        notaFinal = 'F'
    } else {
        notaFinal = 'Nota inválida'
    }

    return notaFinal  
}

    console.log(obterNota(96))
    console.log(obterNota(111))
    console.log(obterNota(-1))
    console.log(obterNota(54))
    console.log(obterNota(78))
    console.log(obterNota(89))
    console.log(obterNota(10))
    console.log(obterNota(67))
    console.log(obterNota(34))
# Exercício 2 (Fluxo de caixa familiar)

const gastoFamiliar = {
   recitas: [1688, 4314.45, 999, 134],
   despesas: [536, 99, 4200.54, 203, 1200]
    }

    function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
    }

function calculateGastos () {
    calculateReceitas = sum(gastoFamiliar.recitas)
    calculateDespesas = sum(gastoFamiliar.despesas)

    const total = calculateReceitas - calculateDespesas

    const itsOK = total >= 0

    let balanceText = "negativo"
    if (itsOK) {
        balanceText = "positivo"
    } 

    console.log (`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
    }

    calculateGastos()
# Exercício 3 (Celsius to Fahrenheit)
    
function trasformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    if(celsiusExists) {
         updatedDegree = Number(degree.toUpperCase().replace("C", ""));
         formula = celsius => celsius * 9/5 + 32
         degreeSing = 'F'
    }

    return formula(updatedDegree) + degreeSing

}

try {
    console.log(trasformDegree('10C'));
    console.log(trasformDegree('50F')) 
    trasformDegree('50Z')
} catch (error) {
    console.error(error.message);
}
# Exercício 4 (Buscando e encontrando dados em Array)

    