import { Transacao } from "./Transacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { ResumoTransacoes } from "./ResumoTransacoes.js";
import { Armazenador } from "./Armazenador.js";
import { ValidaDebito, ValidaDeposito } from "./Decorators.js";

export class Conta {
  protected nome: string;
  protected saldo: number = Number(Armazenador.obter<number>("saldo")) || 0;
  private transacoes: Transacao[] = Armazenador.obter<Transacao[]>(("transacoes"),
      (key: string, value: string) => {
        if (key == "data") {
          return new Date(value); // transforma em tipo data novamente.
        }

        return value;
      },
    ) || [];

  constructor(nome: string) {
    this.nome = nome;
  }

  public getTitular(){
    return this.nome
  }

  public getSaldo() {
    return this.saldo;
  }

  public getDataDeAcesso(): Date {
    return new Date();
  }

  @ValidaDebito //decorators
  private debitar(valor: number): void {
    this.saldo -= valor;
    Armazenador.salvar("saldo", this.saldo);
  }

  @ValidaDeposito
  private depositar(valor: number): void {
    this.saldo += valor;
    Armazenador.salvar("saldo", this.saldo);
  }

  public getGruposTransacoes(): GrupoTransacao[] {
    const gruposTransacoes: GrupoTransacao[] = [];
    const listaTransacoes: Transacao[] = structuredClone(this.transacoes); //copia profunda de transacoes
    const transacoesOrdenadas: Transacao[] = listaTransacoes.sort(
      (a, b) => b.data.getTime() - a.data.getTime(),
    );
    let labelAtualGrupoTransacao: string = "";

    for (let transacao of transacoesOrdenadas) {
      let labelGrupoTransacao: string = transacao.data.toLocaleDateString(
        "pt-br",
        { month: "long", year: "numeric" },
      );
      if (labelAtualGrupoTransacao != labelGrupoTransacao) {
        labelAtualGrupoTransacao = labelGrupoTransacao;
        gruposTransacoes.push({
          label: labelGrupoTransacao,
          transacoes: [],
        });
      }
      gruposTransacoes.at(-1)?.transacoes.push(transacao);
    }

    return gruposTransacoes;
  }

  public agruparTransacoes(): ResumoTransacoes {
    const resumo: ResumoTransacoes = {
      totalDepositos: 0,
      totalTransferencias: 0,
      totalPagamentosBoleto: 0,
    };

    this.transacoes.forEach((transacao) => {
      switch (transacao.tipoTransacao) {
        case TipoTransacao.DEPOSITO:
          resumo.totalDepositos += transacao.valor;
          break;
        case TipoTransacao.TRANSFERENCIA:
          resumo.totalTransferencias += transacao.valor;
          break;
        case TipoTransacao.PAGAMENTO_BOLETO:
          resumo.totalPagamentosBoleto += transacao.valor;
          break;
        default:
          alert("Tipo de transacao inválida!");
          break;
      }
    });

    return resumo;
  }

  public registrarTransacao(novaTransacao: Transacao): void {
    if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
      this.depositar(novaTransacao.valor);
    } else if (
      novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA ||
      novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO
    ) {
      this.debitar(novaTransacao.valor);
      novaTransacao.valor *= -1; // faz o valor ficar negativo
    } else {
      throw new Error("Tipo de transação inválida.");
    }
    this.transacoes.push(novaTransacao);
    Armazenador.salvar("transacoes", this.transacoes);
  }
}

export class ContaPremium extends Conta {
  

  registrarTransacao(transacao: Transacao): void {
    if(transacao.tipoTransacao === TipoTransacao.DEPOSITO){
      console.log("Ganhou um bônus de 0.50 centavos!");
      transacao.valor += 0.5 
    }
    super.registrarTransacao(transacao); ; //super usa os atributos e metodos da classe mae/pai
  }

}

const conta = new Conta("Joana da Silva Oliveira");
const contaPremium = new ContaPremium("Gabriel Denti");

export default conta;
