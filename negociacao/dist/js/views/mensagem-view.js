import { ViewTs } from "./view.js";
export class MensagemView extends ViewTs {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
