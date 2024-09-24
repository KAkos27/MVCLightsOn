export default class Modell {
  #LISTA;
  #nyertesE;

  constructor() {
    this.#LISTA = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    this.#nyertesE = false;
  }

  getLISTA() {
    return this.#LISTA;
  }

  szomszedokValtoztatasa = (id) => {
    this.#LISTA[id] = !this.#LISTA[id];
    if (id % 3 !== 0) {
      this.#LISTA[id - 1] = !this.#LISTA[id - 1];
    }
    if (id % 3 !== 2) {
      this.#LISTA[id + 1] = !this.#LISTA[id + 1];
    }
    if (id > 2) {
      this.#LISTA[id - 3] = !this.#LISTA[id - 3];
    }
    if (id < 6) {
      this.#LISTA[id + 3] = !this.#LISTA[id + 3];
    }
  };

  nyertesE = () => {
    if (this.#LISTA.every(Boolean)) {
      this.#nyertesE = true;
    }
  };

  getNyertesE = () => this.#nyertesE;
}
