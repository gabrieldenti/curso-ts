import { escape } from "../decorators/escape.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class ViewTs<T> {
  //-> generics é um tipo de dado que pode trabalhar com varios tipos e ele so recebe o tipo de dado que for passado para ele quando é instanciada
  private elemento: HTMLElement | null;
  private escapar: boolean = false;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }
  
  protected abstract template(model: T): string; //cria o template

  @logarTempoDeExecucao(true)
  public update(model: T): void {
    //renderiza o template
    let template = this.template(model);
    this.elemento!.innerHTML = template;
  }
}
