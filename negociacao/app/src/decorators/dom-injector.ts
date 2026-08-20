export function domInjector(seletor: string){ //decorator de propriedades
    return function(target: any, propertyKey: string){ 

        const getter = function(){
            const elemento = document.querySelector(seletor);
            return elemento;
        }
        
        Object.defineProperty(target, propertyKey, { //-> no prototype da classe(target) pegue a propriedade propetryKey e redefina o comportamento dela, toda vez que alguem chamaela executa o getter.
            get: getter
        })
    }
}

//target -> é a funcao construtora em propriedades estaticas se for em propriedades não estaticos retorna o prototype da classe.
//properyKey -> da o nome da propriedade que foi decorado