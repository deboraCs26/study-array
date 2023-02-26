const cliente = {
    nome : "Débora",
    idade : 26,
    cpf : "03429385670",
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

    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue 
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)

