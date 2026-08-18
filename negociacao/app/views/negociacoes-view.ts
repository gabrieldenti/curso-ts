import { Negociacoes } from "../models/negociacoes.js";
import formatarData from "../utils/formatarData.js";
import { ViewTs } from "./view.js";

export class NegociacoesView extends ViewTs {
  template(model: Negociacoes): string {
    //head, body //_> cria/declara o template
    return `
        <table class="table table-hover table-bordered">
            <thead> 
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th> 
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${model
                  .lista()
                  .map((negociacao) => {
                    return `
                    <tr>
                        <td>${formatarData(negociacao.getData())}</td>
                        <td>${negociacao.getQuantidade()}</td>
                        <td>${negociacao.getValor()}</td>
                    </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
        
        `;
  }

  update(model: Negociacoes): void {
    //exibe/renderiza o template
    this.elemento!.innerHTML = this.template(model);
  }
}
