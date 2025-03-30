var D = Object.defineProperty;
var E = (s) => {
  throw TypeError(s);
};
var F = (s, t, e) =>
  t in s
    ? D(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (s[t] = e);
var f = (s, t, e) => F(s, typeof t != "symbol" ? t + "" : t, e),
  N = (s, t, e) => t.has(s) || E("Cannot " + e);
var _ = (s, t, e) => (
    N(s, t, "read from private field"), e ? e.call(s) : t.get(s)
  ),
  h = (s, t, e) =>
    t.has(s)
      ? E("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(s)
        : t.set(s, e);
var c = (s, t, e) => (N(s, t, "access private method"), e);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
  new MutationObserver((a) => {
    for (const n of a)
      if (n.type === "childList")
        for (const L of n.addedNodes)
          L.tagName === "LINK" && L.rel === "modulepreload" && o(L);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(a) {
    const n = {};
    return (
      a.integrity && (n.integrity = a.integrity),
      a.referrerPolicy && (n.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function o(a) {
    if (a.ep) return;
    a.ep = !0;
    const n = e(a);
    fetch(a.href, n);
  }
})();
var m, P, B, A;
class K {
  constructor(t, e) {
    h(this, m);
    (this.model = t),
      (this.view = e),
      (this.view.header.form.input.element.value = this.model.defaultValue),
      c(this, m, P).call(this),
      this.queryHelper(this.model.defaultValue);
  }
  async queryHelper(t) {
    (this.view.listImages.data = await this.model.getData(t)),
      this.view.listImages.render();
  }
  async btnChoiceHandler(t) {
    const e = t.target.closest("[data-btn]");
    e && (await this.queryHelper(e.dataset.btn));
  }
}
(m = new WeakSet()),
  (P = function () {
    this.view.header.element.addEventListener("click", (t) =>
      c(this, m, B).call(this, t),
    ),
      this.view.header.form.element.addEventListener("submit", async (t) => {
        t.preventDefault(),
          (this.view.listImages.data = await c(this, m, A).call(this, t)),
          this.view.listImages.render();
      }),
      this.view.header.listButtons.element.addEventListener("click", (t) => {
        this.btnChoiceHandler(t);
      });
  }),
  (B = function (t) {
    t.target.closest("#burger") &&
      (this.view.header.listButtons.show(),
      this.view.header.burger._shangeStyle());
  }),
  (A = async function (t) {
    const e = new FormData(t.target).get("search");
    return await this.model.getData(e);
  });
class O {
  constructor() {
    f(this, "defaultValue", "food");
    (this.API_KEY = "GhKsB5sAtKrUEiAAWKJYM56CueNnuUoIms_7HaILTUw"),
      (this.BASE_URL = "https://api.unsplash.com/search/photos");
  }
  async getData(t) {
    try {
      const e = `${this.BASE_URL}?client_id=${this.API_KEY}&query=${t}&per_page=20&orientation=portrait`,
        o = await fetch(e, { method: "GET" });
      if (!o.ok) throw new Error(`Ошибка ${o.status}: ${o.statusText}`);
      return (await o.json()).results;
    } catch (e) {
      return console.error("Ошибка при получении данных:", e), null;
    }
  }
}
var l, I, M, T, $;
const v = class v {
  constructor(t) {
    h(this, l);
    (this.parametrs = t),
      (this.element = c(this, l, I).call(this)),
      (this.childs = []),
      this.element &&
        (c(this, l, M).call(this),
        c(this, l, T).call(this),
        c(this, l, $).call(this));
  }
  _addChildsElement() {
    Array.isArray(this.childs) &&
      this.childs.forEach((t) => {
        t instanceof v
          ? this.element.append(t.getElement())
          : t instanceof HTMLElement && this.element.append(t);
      });
  }
  getElement() {
    return this.element;
  }
};
(l = new WeakSet()),
  (I = function () {
    return this.parametrs.tagName
      ? document.createElement(this.parametrs.tagName)
      : null;
  }),
  (M = function () {
    this.element &&
      Array.isArray(this.parametrs.classList) &&
      this.element.classList.add(...this.parametrs.classList);
  }),
  (T = function () {
    if (this.element && this.parametrs.attr)
      for (const t in this.parametrs.attr)
        this.element.setAttribute(t, this.parametrs.attr[t]);
  }),
  ($ = function () {
    this.element &&
      this.parametrs.text &&
      (this.element.innerText = this.parametrs.text);
  });
let i = v;
const q = "_burger_14bdh_1",
  U = "_burgerTopLine_14bdh_16",
  V = "_burgerMiddleLine_14bdh_17",
  j = "_burgerBottomLine_14bdh_18",
  Y = "_open_14bdh_47",
  u = {
    burger: q,
    burgerTopLine: U,
    burgerMiddleLine: V,
    burgerBottomLine: j,
    open: Y,
  },
  G = { tagName: "button", attr: { id: "burger" }, classList: [u.burger] },
  R = { tagName: "span", classList: [u.burgerTopLine] },
  J = { tagName: "span", classList: [u.burgerMiddleLine] },
  W = { tagName: "span", classList: [u.burgerBottomLine] };
class z extends i {
  constructor() {
    super(G),
      (this.topLine = new i(R)),
      (this.middleLine = new i(J)),
      (this.bottomLine = new i(W)),
      (this.childs = [this.topLine, this.middleLine, this.bottomLine]),
      this._addChildsElement();
  }
  _shangeStyle() {
    this.element.classList.toggle(u.open);
  }
}
const Q = "_form_1if6l_1",
  X = "_input_1if6l_17",
  Z = "_btn_1if6l_42",
  w = { form: Q, input: X, btn: Z },
  tt = { tagName: "form", classList: [w.form] },
  et = {
    tagName: "input",
    classList: [w.input],
    attr: { placeholder: "Search...", name: "search" },
  },
  st = {
    tagName: "input",
    classList: [w.btn],
    attr: { type: "submit", value: "" },
  };
class at extends i {
  constructor() {
    super(tt),
      (this.input = new i(et)),
      (this.btnSubmit = new i(st)),
      (this.childs = [this.input, this.btnSubmit]),
      this._addChildsElement();
  }
}
const nt = "_list_1akll_1",
  it = "_open_1akll_22",
  rt = "_btn_1akll_40",
  r = { list: nt, open: it, btn: rt },
  ot = { tagName: "ul", attr: { id: "listButtons" }, classList: [r.list] },
  ct = [
    {
      tagName: "button",
      attr: { "data-btn": "russia" },
      classList: [r.btn],
      imgSrc: "russia.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "israel" },
      classList: [r.btn],
      imgSrc: "israel.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "georgia" },
      classList: [r.btn],
      imgSrc: "georgia.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "japan" },
      classList: [r.btn],
      imgSrc: "japan.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "ukraine" },
      classList: [r.btn],
      imgSrc: "ukraine.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "britain" },
      classList: [r.btn],
      imgSrc: "britain.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "india" },
      classList: [r.btn],
      imgSrc: "india.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "korea" },
      classList: [r.btn],
      imgSrc: "korea.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "turkey" },
      classList: [r.btn],
      imgSrc: "turkey.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "china" },
      classList: [r.btn],
      imgSrc: "china.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "egypt" },
      classList: [r.btn],
      imgSrc: "egypt.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "greece" },
      classList: [r.btn],
      imgSrc: "greece.svg",
    },
  ];
var g, x;
class lt extends i {
  constructor() {
    super(ot);
    h(this, g);
    (this.childs = []), c(this, g, x).call(this), this._addChildsElement();
  }
  show() {
    this.element.classList.toggle(r.open);
  }
}
(g = new WeakSet()),
  (x = function () {
    ct.forEach((e) => {
      const o = document.createElement("li"),
        a = new i(e),
        n = document.createElement("img");
      (n.src = e.imgSrc),
        a.getElement().prepend(n),
        o.append(a.getElement()),
        this.childs.push(o);
    });
  });
const mt = "_header_oa50e_1",
  ht = "_content_oa50e_11",
  C = { header: mt, content: ht },
  dt = { tagName: "header", classList: [C.header] },
  ut = { tagName: "div", classList: [C.content] };
class gt extends i {
  constructor() {
    super(dt),
      (this.listButtons = new lt()),
      (this.form = new at()),
      (this.burger = new z()),
      (this.content = new i(ut)),
      (this.content.childs = [this.burger, this.listButtons, this.form]),
      this.content._addChildsElement(),
      this.childs.push(this.content),
      this._addChildsElement();
  }
}
const pt = "_list_18csn_1",
  bt = "_item_18csn_10",
  Lt = "_img_18csn_25",
  y = { list: pt, item: bt, img: Lt },
  ft = { tagName: "ul", classList: [y.list] },
  _t = { tagName: "li", classList: [y.item] },
  S = { tagName: "img", classList: [y.img], attr: {} };
var p, H;
class wt extends i {
  constructor() {
    super(ft);
    h(this, p);
    f(this, "data", []);
  }
  render() {
    c(this, p, H).call(this);
    const e = document.createDocumentFragment();
    this.data.length > 0 &&
      this.data.forEach((o) => {
        const a = new i(_t);
        S.attr.src = o.urls.regular;
        const n = new i(S);
        a.getElement().append(n.getElement()),
          e.append(a.getElement()),
          this.element.append(e);
      });
  }
}
(p = new WeakSet()),
  (H = function () {
    this.element.innerHTML = "";
  });
var d, b, k;
class yt {
  constructor() {
    h(this, b);
    h(this, d, document.body);
    (this.header = new gt()),
      (this.listImages = new wt()),
      c(this, b, k).call(this);
  }
}
(d = new WeakMap()),
  (b = new WeakSet()),
  (k = function () {
    _(this, d).append(this.header.getElement()),
      _(this, d).append(this.listImages.getElement());
  });
class vt {
  constructor() {
    (this.model = new O()),
      (this.view = new yt()),
      (this.controller = new K(this.model, this.view));
  }
}
console.log(1);
new vt();
//# sourceMappingURL=index-DFURSiw5.js.map
