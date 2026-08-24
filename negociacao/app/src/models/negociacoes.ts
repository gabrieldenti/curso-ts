import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";


export class Negociacoes implements Modelo<Negociacao> {
    private negociacoes: Negociacao[] = [];
    
    
    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
    
    public lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
    
    public paraTexto(): string {
        return JSON.stringify(this.negociacoes);
    }
    
    ehIgual(objeto: any): boolean {
        throw new Error("Method not implemented.");
    } //'implements' para herdar interface
}