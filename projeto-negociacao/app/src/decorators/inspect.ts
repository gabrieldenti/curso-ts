export function inspect(){ // funcao externa permite passar parametros mas é opcional no decorators
    return function(target: any, propetryKey: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            console.log(`Inspecionando metodo ${propetryKey}`);
            console.log(`Metodo com os parametros ${args}`);
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Retorno do metodo ${resultado}`);
            return resultado;
        }

        return descriptor;

    }
}

//decoratos são executados de cima para baixo e aplicados de baixo para cima