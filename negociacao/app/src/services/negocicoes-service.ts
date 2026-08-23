import { Negociacao } from "../models/negociacao.js";
import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => {
        //pega a resposta do servidor e converte para json(obj)
        return res.json();
      })
      .then((dados: NegociacoesDoDia[]) => {
        return dados.map((dado) => {
          return new Negociacao(new Date(), dado.vezes, dado.montante); //com a resposta do servidor converte os dados[] em uma negociacao, retorna um array de negociacao
        });
      });
  }
}
