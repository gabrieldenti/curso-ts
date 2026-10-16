import { ViewTs } from "./view.js";
export class MensagemView extends ViewTs {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
//# sourceMappingURL=mensagem-view.js.map