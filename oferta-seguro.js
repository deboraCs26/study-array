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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);

    }
}

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)