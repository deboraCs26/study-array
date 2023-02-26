const cliente = {
    nome : "Débora",
    idade : 26,
    cpf : "03429385670",
    email : "debora.sesv@gmail.com",
    fones : ["1526672348273862", "1378124625347124"],
    dependentes: [{
    nome : 'Crystal Santos',
    parentesco : 'filha',
    dataNasc : "31/11/2008"
    
    }]
}
cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)

