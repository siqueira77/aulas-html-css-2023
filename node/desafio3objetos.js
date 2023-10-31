const pessoa = {
    nome: 'lucas',
    cpf: '123456789',
}

const endereco = {
    cep: '11005000',
    rua: 'joaquina',
    numero: '71',
}

const cartao = {
    numero_cartao: '987654',
    agencia: '7878',
    validade: '1223',
}

const criar_compra = {...pessoa, ...endereco,payment:{...cartao},valor: 'R$2,00'}
console.log(criar_compra)

