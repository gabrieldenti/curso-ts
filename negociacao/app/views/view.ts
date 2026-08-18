export abstract class ViewTs {
  protected elemento: HTMLElement | null;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }
}
