//pasta compenents são os os compenentes que interagem com a pagina, o que o usuario vê
import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js"
import Conta from "../types/Conta.js"


const elementoData = document.querySelector('.block-saldo time') as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement; //procura um elemento depois o outro.


elementoData.textContent = formatarData(Conta.getDataDeAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO) // formata data


renderizarSaldo();
function renderizarSaldo(): void{
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo()) // formata no padrao brasileiro de moeda
}

const saldoComponete = {
    atualizar(): void {
        renderizarSaldo()
    }
}

export default saldoComponete;