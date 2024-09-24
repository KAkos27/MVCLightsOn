import Lampa from "./Lampa.js";

export default class Jatekter {
  #szuloElem;
  #LISTA;

  constructor(szuloElem, LISTA) {
    this.#szuloElem = szuloElem;
    this.#LISTA = LISTA;
    this.JatekterGeneral();
  }

  JatekterGeneral() {
    this.#szuloElem.empty();
    for (let index = 0; index < 9; index++) {
      new Lampa(this.#szuloElem, index, this.#LISTA[index]);
    }
  }

  gyozelemKiiras = (vanNyertes) => {
    if (vanNyertes) {
      setTimeout(() => {
        alert("Győzelem");
      }, 1);
      location.reload();
    }
  };
}
