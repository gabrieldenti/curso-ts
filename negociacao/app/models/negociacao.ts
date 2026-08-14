export class Negociacao {
  private data: Date;
  private quantidade: number;
  private valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  getData(): Date {
    return this.data;
  }

  getQuantidade(): number {
    return this.quantidade;
  }

  getValor(): number {
    return this.valor;
  }

  getVolume(): number {
    return this.quantidade * this.valor;
  }
}
