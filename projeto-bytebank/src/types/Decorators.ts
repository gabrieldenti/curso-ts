/**
 * MODELO GENÉRICO DE DECORATOR DE MÉTODO
 * * @param target       -> A classe (se estático) ou o protótipo da classe (se instância).
 * @param propertyKey  -> O nome do método que está sendo decorado (como string).
 * @param descriptor   -> O descritor do método. Contém a função original em `.value`.
 */

export function ValidaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    // Guarda uma referência ao método original
    const originalMethod = descriptor.value;

    descriptor.value = function (this: any, valorDoDebito: number){ // Substitui o método original por uma nova função
        if(valorDoDebito <= 0){
            throw new Error("O valor a ser debitado precisa ser maior do que zero!");
        }
        if(valorDoDebito > this.saldo){
            throw new Error("Seu saldo é insuficiente para realizar a operação!");
        }

        // Executa o método original com os argumentos corretos
        return originalMethod.apply(this, [valorDoDebito])
    }
    
    return descriptor;// retorna o descriptor com essas validações
}

export function ValidaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function(valorDeposito: number){

        if(valorDeposito <= 0){
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        
        return originalMethod.apply(this, [valorDeposito]);
    }

    return descriptor;
}