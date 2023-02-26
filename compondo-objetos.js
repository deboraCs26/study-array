const cliente = {
    nome : "Débora",
    idade : 26,
    cpf : "03429385670",
    email : "debora.sesv@gmail.com",
}

//um objeto dentro de outro objeto

cliente.dependentes = {
    nome : "Crystal",
    parentesco : "sobrinha",
    dataNasc : "31/11/2008"

}

console.log(cliente)

cliente.dependentes.nome = "Crystal Santos"

console.log(cliente)