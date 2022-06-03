function ValidaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('envie os parâmetros');

        if (typeof arr !== 'object')
            throw new TypeError('array precisa der do tipo object');

        if (typeof num !== 'number')
            throw new TypeError('array precisa der do tipo number');

        if (arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('esse erro é um ReferenceError!');
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log('este é um TypeError');
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log('este é um RangeError');
            console.log(e.stack);
        } else {
            console.log('tipo de erro não esperado:' + e);
        }
    }
}
console.log(ValidaArray([1, 2, 3], 0));