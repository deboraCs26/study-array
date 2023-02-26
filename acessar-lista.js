const cliente = {
    nome : "Débora",
    idade : 26,
    cpf : "03429385670",
    email : "debora.sesv@gmail.com",
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente [chaves[0]])

chaves.forEach(info => console.log(cliente[info]))