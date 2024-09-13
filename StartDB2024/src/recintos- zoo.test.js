import RecintosZoo from './recintos-zoo.js';

describe('Recintos do Zoológico', () => {

    test('Deve rejeitar animal inválido', () => {
        const resultado = new RecintosZoo().analisaRecintos('UNICORNIO', 1);
        expect(resultado).toBe("Animal inválido");
    });

    test('Deve rejeitar quantidade inválida', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 0);
        expect(resultado).toBe("Quantidade inválida");
    });

    test('Não deve encontrar recintos para 10 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 10);
        expect(resultado).toBe("Não há recinto viável");
    });

    test('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 1);
        expect(resultado).toEqual(['Recinto 4 (espaço livre: 5 total: 8)']);
    });


    test('Deve encontrar recintos para 1 gazela', () => {
        const resultado = new RecintosZoo().analisaRecintos('GAZELA', 1);
        expect(resultado).toEqual([
            'Recinto 1 (espaço livre: 5 total: 10)',
            'Recinto 5 (espaço livre: 4 total: 9)'
        ]);
    });

    test('Deve encontrar recintos para 1 hipopótamo', () => {
        const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 1);
        expect(resultado).toEqual([
            'Recinto 1 (espaço livre: 3 total: 10)',
            'Recinto 4 (espaço livre: 4 total: 8)',
            'Recinto 5 (espaço livre: 2 total: 9)'
        ]);
    });

    
    test('Deve encontrar recintos para 1 leopardo', () => {
        const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 1);
        expect(resultado).toEqual([
            'Recinto 1 (espaço livre: 5 total: 10)',
            'Recinto 5 (espaço livre: 4 total: 9)'
        ]);
    });

    test('Deve encontrar recintos para 3 macacos', () => {
        const resultado = new RecintosZoo().analisaRecintos('MACACO', 3);
        expect(resultado).toEqual([
            'Recinto 1 (espaço livre: 4 total: 10)',
            'Recinto 2 (espaço livre: 2 total: 5)',
            'Recinto 5 (espaço livre: 3 total: 9)'
        ]);
    });

});
