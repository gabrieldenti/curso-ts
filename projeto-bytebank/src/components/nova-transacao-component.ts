import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import saldoComponete from "./saldo-component.js";
import Conta from "../types/Conta.js";
import extratoComponente from "./extrato-component.js";

const elementoFormulario = document.querySelector(
  ".block-nova-transacao form",
) as HTMLFormElement; //Informa que é um elemento html
elementoFormulario.addEventListener("submit", function (event) {
  try {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }

    const inputDataTransacao = document.querySelector(
      "#data",
    ) as HTMLInputElement;
    const inputValorTransacao = document.querySelector(
      "#valor",
    ) as HTMLInputElement;
    const inputTipoTransacao = document.querySelector(
      "#tipoTransacao",
    ) as HTMLSelectElement;

    let tipoTransacao: TipoTransacao =
      inputTipoTransacao.value as TipoTransacao; // 'as' define que o 'value' do inputTipoTransacao é um enum TipoTransacao
    let valorTransacao: number = inputValorTransacao.valueAsNumber;
    let dataTransacao: Date = new Date(inputDataTransacao.value + " 00:00:00"); //zero hora para definir a data daquele horario. Para nao definir um dia a menos, comportamento padrao do Date do js

    const novaTransacao: Transacao = {
      tipoTransacao: tipoTransacao,
      valor: valorTransacao,
      data: dataTransacao,
    };

    Conta.registrarTransacao(novaTransacao);
    saldoComponete.atualizar();
    extratoComponente.atualizar();

    elementoFormulario.reset();
  } catch (erro) {
    if (erro instanceof Error) { //explicita que o erro é da instancia do Error
      alert(erro.message);
    } else {
      alert("Erro inesperado");
    }
  }
});
