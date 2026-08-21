export function inspect() {
    return function (target, propetryKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Inspecionando metodo ${propetryKey}`);
            console.log(`Metodo com os parametros ${args}`);
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Retorno do metodo ${resultado}`);
            return resultado;
        };
        return descriptor;
    };
}
