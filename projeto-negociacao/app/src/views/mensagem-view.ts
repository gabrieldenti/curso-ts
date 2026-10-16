import { ViewTs } from "./view.js";

export class MensagemView extends ViewTs<string> {
  
 protected override template(model: string): string {
    return `
            <p class="alert alert-info">${model}</p>
        `;
  }

}
