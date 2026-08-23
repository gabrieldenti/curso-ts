export class Negociacao {
  private data: Date;
  private quantidade: number;
  private valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  public getData(): Date {
    return this.data;
  }

  public getQuantidade(): number {
    return this.quantidade;
  }

  public getValor(): number {
    return this.valor;
  }

  public getVolume(): number {
    return this.quantidade * this.valor;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() == negociacao.data.getDate() &&
      this.data.getMonth() == negociacao.data.getMonth() &&
      this.data.getFullYear() == negociacao.data.getFullYear()
    );
  }

  public static criaNegociacao(
    dataString: string,
    quantidadeString: string,
    valorString: string,
  ): Negociacao {
    return new Negociacao(
      new Date(dataString.replace(/-/g, ",")),
      parseInt(quantidadeString),
      parseFloat(valorString),
    );
  }
}
