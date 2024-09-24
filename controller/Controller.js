import Model from "../modell/Model.js";
import Jatekter from "../view/Jatekter.js";

export default class Controller {
    #JATEKTER;
    #MODEL;
    constructor() {
        this.#MODEL = new Model();
        this.#JATEKTER = $(".jatekter");
        new Jatekter(this.#JATEKTER, this.#MODEL.getLEPESEK());
        this.kivalaszt();
    }

    kivalaszt() {
        $(window).on("kivalaszt", (event) => {
            this.#MODEL.setLEPESEK(event.detail);
            new Jatekter(this.#JATEKTER, this.#MODEL.getLEPESEK());
        })
    }
}