import formatarData from "../utils/formatarData.js";
export class NegociacoesView {
    elemento;
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
                ${model.lista().map(negociacao => {
            return `
                    <tr>
                        <td>${formatarData(negociacao.getData())}</td>
                        <td>${negociacao.getQuantidade()}</td>
                        <td>${negociacao.getValor()}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
