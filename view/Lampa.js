export default class Lampa {
  #szuloElem;
  #allapot;
  #index;

  constructor(szuloElem, index, allapot) {
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.#allapot = allapot;

    this.mezoMegjelenit();
    this.lampa = $(".lampa:last");

    this.esemenyKezelo();
  }

  mezoMegjelenit() {
    let classNev = "lampa";
    if (this.#allapot) {
      classNev += " eg";
    }
    let txt = `
      <div class='${classNev}'></div>
      `;
    this.#szuloElem.append(txt);
  }

  esemenyKezelo() {
    this.lampa.on("click", () => {
      const e = new CustomEvent("kivalaszt", {
        detail: this.#index,
      });
      window.dispatchEvent(e);
    });
  }
}
