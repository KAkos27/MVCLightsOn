export default class Lampa {
    #szuloElem;
    #allapot;
    #index;
  
    constructor(szuloElem, index, allapot) {
      this.#szuloElem = szuloElem;
      this.#index = index;
      this.#allapot = allapot;
  
      this.mezoMegjelenit();
      this.mezo = $(".mezo:last");
  
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
      this.mezo.on("click", () => {
        const e = new CustomEvent("kivalaszt", {
          detail: this.#index,
        });
        window.dispatchEvent(e);
      });
    }
  }