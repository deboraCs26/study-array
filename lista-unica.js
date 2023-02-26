const cliente = [ 

{
    nome : "Débora",
    idade : 26,
    cpf : "034293856700",
    email : "debora.sesv@gmail.com",
    fones : ["1526672348273862", "1378124625347124"],
    dependentes: [
        {
    nome : 'Crystal Santos',
    parentesco : 'filha',
    dataNasc : "31/11/2008" },
    
    {
      nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
    }
],

},

{
    nome: "Edson",
    cpf: "82248724724371829",
    dependentes: [{
        nome: "Esther",
        parentesco: "filha",
        dataNasc: "12/07/2018"
    }],

}

]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.table(listaDependentes)