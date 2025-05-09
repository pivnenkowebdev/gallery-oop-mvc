var K = Object.defineProperty;
var E = (s) => {
  throw TypeError(s);
};
var O = (s, t, e) =>
  t in s
    ? K(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (s[t] = e);
var _ = (s, t, e) => O(s, typeof t != "symbol" ? t + "" : t, e),
  N = (s, t, e) => t.has(s) || E("Cannot " + e);
var g = (s, t, e) => (
    N(s, t, "read from private field"), e ? e.call(s) : t.get(s)
  ),
  d = (s, t, e) =>
    t.has(s)
      ? E("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(s)
        : t.set(s, e);
var c = (s, t, e) => (N(s, t, "access private method"), e);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver((a) => {
    for (const n of a)
      if (n.type === "childList")
        for (const f of n.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
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
  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    const n = e(a);
    fetch(a.href, n);
  }
})();
var m, P, B, A;
class q {
  constructor(t, e) {
    d(this, m);
    (this.model = t),
      (this.view = e),
      (this.view.header.form.input.element.value = this.model.defaultValue),
      c(this, m, P).call(this),
      this.queryHelper(this.model.defaultValue);
  }
  async queryHelper(t) {
    this.view.addLoader(),
      (this.view.listImages.data = await this.model.getData(t)),
      this.view.listImages.render(),
      this.view.removeLoader();
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
    this.view.addLoader();
    const r = await this.model.getData(e);
    return this.view.removeLoader(), r;
  });
class U {
  constructor() {
    _(this, "defaultValue", "food");
    (this.API_KEY = "GhKsB5sAtKrUEiAAWKJYM56CueNnuUoIms_7HaILTUw"),
      (this.BASE_URL = "https://api.unsplash.com/search/photos");
  }
  async getData(t) {
    try {
      const e = `${this.BASE_URL}?client_id=${this.API_KEY}&query=${t}&per_page=20&orientation=portrait`,
        r = await fetch(e, { method: "GET" });
      if (!r.ok) throw new Error(`Ошибка ${r.status}: ${r.statusText}`);
      return (await r.json()).results;
    } catch (e) {
      return console.error("Ошибка при получении данных:", e), null;
    }
  }
}
var l, I, x, T, $;
const y = class y {
  constructor(t) {
    d(this, l);
    (this.parametrs = t),
      (this.element = c(this, l, I).call(this)),
      (this.childs = []),
      this.element &&
        (c(this, l, x).call(this),
        c(this, l, T).call(this),
        c(this, l, $).call(this));
  }
  _addChildsElement() {
    Array.isArray(this.childs) &&
      this.childs.forEach((t) => {
        t instanceof y
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
  (x = function () {
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
let i = y;
const V = "_burger_14bdh_1",
  j = "_burgerTopLine_14bdh_16",
  k = "_burgerMiddleLine_14bdh_17",
  Y = "_burgerBottomLine_14bdh_18",
  z = "_open_14bdh_47",
  u = {
    burger: V,
    burgerTopLine: j,
    burgerMiddleLine: k,
    burgerBottomLine: Y,
    open: z,
  },
  G = { tagName: "button", attr: { id: "burger" }, classList: [u.burger] },
  R = { tagName: "span", classList: [u.burgerTopLine] },
  J = { tagName: "span", classList: [u.burgerMiddleLine] },
  W = { tagName: "span", classList: [u.burgerBottomLine] };
class Q extends i {
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
const X = "_form_1if6l_1",
  Z = "_input_1if6l_17",
  tt = "_btn_1if6l_42",
  w = { form: X, input: Z, btn: tt },
  et = { tagName: "form", classList: [w.form] },
  st = {
    tagName: "input",
    classList: [w.input],
    attr: { placeholder: "Search...", name: "search" },
  },
  at = {
    tagName: "input",
    classList: [w.btn],
    attr: { type: "submit", value: "" },
  };
class it extends i {
  constructor() {
    super(et),
      (this.input = new i(st)),
      (this.btnSubmit = new i(at)),
      (this.childs = [this.input, this.btnSubmit]),
      this._addChildsElement();
  }
}
const nt = "_list_ffwoa_1",
  rt = "_open_ffwoa_22",
  ot = "_btn_ffwoa_40",
  o = { list: nt, open: rt, btn: ot },
  ct = { tagName: "ul", attr: { id: "listButtons" }, classList: [o.list] },
  lt = [
    {
      tagName: "button",
      attr: { "data-btn": "russia" },
      classList: [o.btn],
      imgSrc: "russia.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "israel" },
      classList: [o.btn],
      imgSrc: "israel.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "georgia" },
      classList: [o.btn],
      imgSrc: "georgia.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "japan" },
      classList: [o.btn],
      imgSrc: "japan.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "britain" },
      classList: [o.btn],
      imgSrc: "britain.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "india" },
      classList: [o.btn],
      imgSrc: "india.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "korea" },
      classList: [o.btn],
      imgSrc: "korea.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "turkey" },
      classList: [o.btn],
      imgSrc: "turkey.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "china" },
      classList: [o.btn],
      imgSrc: "china.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "egypt" },
      classList: [o.btn],
      imgSrc: "egypt.svg",
    },
    {
      tagName: "button",
      attr: { "data-btn": "greece" },
      classList: [o.btn],
      imgSrc: "greece.svg",
    },
  ];
var p, M;
class mt extends i {
  constructor() {
    super(ct);
    d(this, p);
    (this.childs = []), c(this, p, M).call(this), this._addChildsElement();
  }
  show() {
    this.element.classList.toggle(o.open);
  }
}
(p = new WeakSet()),
  (M = function () {
    lt.forEach((e) => {
      const r = document.createElement("li"),
        a = new i(e),
        n = document.createElement("img");
      (n.src = e.imgSrc),
        a.getElement().prepend(n),
        r.append(a.getElement()),
        this.childs.push(r);
    });
  });
const dt = "_header_1cvsd_1",
  ht = "_content_1cvsd_11",
  C = { header: dt, content: ht },
  ut = { tagName: "header", classList: [C.header] },
  gt = { tagName: "div", classList: [C.content] };
class pt extends i {
  constructor() {
    super(ut),
      (this.listButtons = new mt()),
      (this.form = new it()),
      (this.burger = new Q()),
      (this.content = new i(gt)),
      (this.content.childs = [this.burger, this.listButtons, this.form]),
      this.content._addChildsElement(),
      this.childs.push(this.content),
      this._addChildsElement();
  }
}
const bt = "_list_h1y3p_1",
  Lt = "_item_h1y3p_16",
  ft = "_img_h1y3p_31",
  v = { list: bt, item: Lt, img: ft },
  _t = { tagName: "ul", classList: [v.list] },
  wt = { tagName: "li", classList: [v.item] },
  S = { tagName: "img", classList: [v.img], attr: {} };
var b, H;
class vt extends i {
  constructor() {
    super(_t);
    d(this, b);
    _(this, "data", []);
  }
  render() {
    c(this, b, H).call(this);
    const e = document.createDocumentFragment();
    this.data.length > 0 &&
      this.data.forEach((r) => {
        const a = new i(wt);
        S.attr.src = r.urls.regular;
        const n = new i(S);
        a.getElement().append(n.getElement()),
          e.append(a.getElement()),
          this.element.append(e);
      });
  }
}
(b = new WeakSet()),
  (H = function () {
    this.element.innerHTML = "";
  });
const yt = "_fade_rz7rx_1",
  Et = "_imgLoad_rz7rx_11",
  D = { fade: yt, imgLoad: Et },
  Nt = { tagName: "div", classList: [D.fade] },
  St = {
    tagName: "img",
    attr: { src: "gif-load.gif" },
    classList: [D.imgLoad],
  };
class Pt extends i {
  constructor() {
    super(Nt),
      (this.imgLoad = new i(St)),
      this.childs.push(this.imgLoad),
      this._addChildsElement();
  }
  removeElement() {
    this.element.remove();
  }
}
var h, L, F;
class Bt {
  constructor() {
    d(this, L);
    d(this, h, document.body);
    (this.header = new pt()),
      (this.listImages = new vt()),
      (this.loader = new Pt()),
      c(this, L, F).call(this);
  }
  addLoader() {
    g(this, h).append(this.loader.getElement());
  }
  removeLoader() {
    setTimeout(() => {
      this.loader.removeElement();
    }, 1e3);
  }
}
(h = new WeakMap()),
  (L = new WeakSet()),
  (F = function () {
    g(this, h).append(this.header.getElement()),
      g(this, h).append(this.listImages.getElement());
  });
class At {
  constructor() {
    (this.model = new U()),
      (this.view = new Bt()),
      (this.controller = new q(this.model, this.view));
  }
}
console.log(1);
new At();
//# sourceMappingURL=index-DWj7Hyyq.js.map
