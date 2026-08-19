function escape(){
    return function(target: any, propetryKey: string, descriptor: PropertyDescriptor){
        
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){

            let resultado = metodoOriginal.apply(this, args)
             if(typeof resultado === 'string'){
                resultado = resultado.replace(/<script>[\s\S]*?<\/script>/, "");
            }

            return resultado
        }
        return descriptor;
    }
}