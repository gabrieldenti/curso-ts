export class Negociacoes {
    negociacoes = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes);
    }
    ehIgual(objeto) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=negociacoes.js.map