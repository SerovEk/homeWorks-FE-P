class Accordion {
  constructor(el) {
    this._el = el;
  }
  init() {
    this._applyToAllContent((content, e, i) => {
      content.classList.add("hidden");
      e.setAttribute("data-id", i);
    });

    //   ----------------------event-----------------------
    this._el.addEventListener("click", this._onAccordClick.bind(this));
  }
  // -------------------------------------------
  _toggleElements(e) {
    e.classList.toggle("hidden");
    e.classList.toggle("active");
  }
  // ----------------------for event---------------------
  _onAccordClick = (e) => {
    if (e.target.classList.contains("item-header")) {
      this._toggleElements(e.target.nextElementSibling);
    }
  };
  // -----------------------open by index--------------------
  openByIndex(index) {
    const item = this._el.querySelector(`div[data-id="${index}"]`);
    this._toggleElements(item.children[1]);
  }

  _applyToAllContent(cb) {
    Array.prototype.forEach.call(this._el.children, (parent, index) => {
      const [_, content] = parent.children;
      if (!content) {
        throw new Error("..............");
      }
      cb(content, parent, index);
    });
  }
  // ----------------------opened----------------------
  getOpenedIndex() {
    const openedIndex = document.getElementsByClassName("active");
    return Array.prototype.map.call(openedIndex, (e) => {
      return +e.parentElement.dataset["id"];
    });
  }
  // --------------------create new blok------------------------
  addElement(header, content) {
    const headerEl = document.createElement("div");
    headerEl.classList.add("item-header");
    headerEl.innerText = header;

    const contentEl = document.createElement("div");
    contentEl.classList.add("item-content", "hidden");
    contentEl.innerHTML = content;

    const itemEl = document.createElement("div");
    itemEl.classList.add("accordion-item");
    itemEl.append(headerEl, contentEl);

    this._el.append(itemEl);
  }
  // ---------------------open all-----------------------
  openAll() {
    this._applyToAllContent((e) => {
      e.classList.contains("hidden") && this._toggleElements(e);
    });
  }
  // ---------------------close all----------------------
  closeAll() {
    this._applyToAllContent((e) => {
      e.classList.contains("active") && this._toggleElements(e);
    });
  }
};



