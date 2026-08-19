export abstract class ViewTs<T> {
  //-> generics é um tipo de dado que pode trabalhar com varios tipos e ele so recebe o tipo de dado que for passado para ele quando é instanciada
  private elemento: HTMLElement | null;
  private escapar: boolean = false;

  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor);
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string; //cria o template

  public update(model: T): void {
    //renderiza o template

    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, ""); //-> remove o script do template
    }
    this.elemento!.innerHTML = template;
  }
}
