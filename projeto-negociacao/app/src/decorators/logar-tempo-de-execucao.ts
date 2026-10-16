export function logarTempoDeExecucao(emSegundos: boolean = false){

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        
        const metodoOriginal = descriptor.value // guarda o metodo original

        descriptor.value = function(...args: any[]){
            const t1 = performance.now()

            let unidade = 'milisegundos'
            let divisor = 1;
            
            if(emSegundos){
                divisor= 1000;
                unidade = 'segundos';
            }

            const funcaoOriginal = metodoOriginal.apply(this, args) //chama a funcao original considerando o contexto

            const t2 = performance.now()
            console.log(`${propertyKey}, temmpo de execução ${t2 - t1/divisor} ${unidade}`);

            return funcaoOriginal; //retorna o resultado da funcao original 
        }
        

        return descriptor; //retorna a funcao modificada
    }
}

//target -> é a funcao construtora em metodos estaticos se for em metodos não estaticos retorna o prototype da classe.
//properyKey -> da o nome do metodo que foi decorado
//descriptor -> contem a ref pro metodo original 