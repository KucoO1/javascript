var pessoa = {
    nome: "Nataniel",
    idade: 23,
    peso: 60,
    pets: ['Cão','Gato','Papagaio'],
    carros: {
        camaro: {
            placa: 'LD-86-45-AO',
            cor: 'Azul',
            velocidade: 250
        },
        mercedez: {
            placa: 'LD-67-78-AO',
            cor: 'Vermelho',
            velocidade: 340
        }
    },
    andar:function(km){
        console.log(`${pessoa.nome} andou ${km}km`)
    }
}
pessoa.andar(20)