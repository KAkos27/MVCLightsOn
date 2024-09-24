import Model from "../model/Model.js";
import Jatekter from "../view/Jatekter.js";

export default class Controller {
  #JATEKTER;
  #MODEL;
  constructor() {
    this.#MODEL = new Model();
    this.#JATEKTER = $(".jatekter");
    new Jatekter(this.#JATEKTER, this.#MODEL.getLISTA());
    this.kivalaszt();
  }

  kivalaszt() {
    $(window).on("kivalaszt", (event) => {
      this.#MODEL.szomszedokValtoztatasa(event.detail);
      this.#MODEL.nyertesE();
      new Jatekter(this.#JATEKTER, this.#MODEL.getLISTA()).gyozelemKiiras(
        this.#MODEL.getNyertesE()
      );
    });
  }
}
