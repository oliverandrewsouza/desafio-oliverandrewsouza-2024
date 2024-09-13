const recintos = [
    { numero: 1, bioma: 'savana', tamanhoTotal: 10, animais: [{ especie: 'MACACO', quantidade: 3 }] },
    { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animais: [] },
    { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animais: [{ especie: 'GAZELA', quantidade: 1 }] },
    { numero: 4, bioma: 'rio', tamanhoTotal: 8, animais: [] },
    { numero: 5, bioma: 'savana', tamanhoTotal: 9, animais: [{ especie: 'LEAO', quantidade: 1 }] }
];

const animais = {
    LEAO: { tamanho: 3, biomas: ['savana'] },
    LEOPARDO: { tamanho: 2, biomas: ['savana'] },
    CROCODILO: { tamanho: 3, biomas: ['rio'] },
    MACACO: { tamanho: 1, biomas: ['savana', 'floresta'] },
    GAZELA: { tamanho: 2, biomas: ['savana'] },
    HIPOPOTAMO: { tamanho: 4, biomas: ['savana', 'rio'] }
};

class RecintosZoo {
    constructor() {
        this.recintos = recintos;
        this.animais = animais;
    }

    analisaRecintos(tipoAnimal, quantidade) {

        if (!this.animais[tipoAnimal]) {
            return "Animal inválido";
        }

        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
            return "Quantidade inválida";
        }

        const { tamanho, biomas } = this.animais[tipoAnimal];
        const recintosViaveis = [];

        for (const recinto of this.recintos) {
            let espacoOcupado = 0;
            for (const animal of recinto.animais) {
                espacoOcupado += animal.quantidade * this.animais[animal.especie].tamanho;
            }

            const espacoDisponivel = recinto.tamanhoTotal - espacoOcupado;

            const biomaValido = biomas.includes(recinto.bioma);
            if (biomaValido && espacoDisponivel >= tamanho * quantidade) {
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoDisponivel - tamanho * quantidade} total: ${recinto.tamanhoTotal})`);
            }
        }

        if (recintosViaveis.length > 0) {
            return recintosViaveis;
        } else {
            return "Não há recinto viável";
        }
    }
}

export { RecintosZoo as RecintosZoo };

const zoo = new RecintosZoo();
console.log(zoo.analisaRecintos('MACACO', 2)); 
console.log(zoo.analisaRecintos('LEAO', 2));  
console.log(zoo.analisaRecintos('HIPOPOTAMO', 1)); 
console.log(zoo.analisaRecintos('UNICORNIO', 1)); 
console.log(zoo.analisaRecintos('MACACO', -1)); 
console.log(zoo.analisaRecintos('MACACO', 10)); 
console.log(zoo.analisaRecintos('MACACO', 0));  
console.log(zoo.analisaRecintos('MACACO', -5)); 
console.log(zoo.analisaRecintos('GAZELA', 3)); 
