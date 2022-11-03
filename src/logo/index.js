function $(selector = null) {
  function get() {
    return document.querySelector(selector);
  }

  function css({ key, style }) {
    get().style[key] = style;
  }

  function text(text) {
    get().innerText = text;
  }

  function find() {
    return get();
  }

  function addClass(className) {
    get().classList.add(className);
  }

  function removeClass(className) {
    get().classList.remove(className);
  }

  function create() {
    return document.createElement(selector);
  }

  function child(el_) {
    return get().appendChild(el_);
  }
}

export const sanitizeFullName = (name) => {
  if (!name) return name;
  const name_array = name.split(" ");
  if (name_array.length > 2) {
    return `${name_array[0]} ${name_array[1].charAt(0)}. ${name_array[2]}`;
  } else if (name_array.length <= 2) {
    return name;
  }
};

export const getNameInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((e) => e.charAt(0))
    .join("");

export class Logo {
  constructor(name, bgColor, textColor, circleOnly = true) {
    this.name = name;
    this.bgColor = bgColor;
    this.textColor = textColor;
    this.circleOnly = circleOnly;
  }

  __init__() {
    // create widget elements
    this.__create_widget_();
  }

  __create_widget_() {
    const __div = $("div");
    const span_el = $("span");
    const [el_, el__two] = [__div.create(), __div.create()];
    el_.add("d-flex items-center position-relative");
    el__two.add("d-flex items-center circle__x");
    el__two.css({
      key: "color",
      value: this.textColor,
    });
    el__two.css({
      key: "border",
      value: `8px solid ${this.textColor}`,
    });
    const _span = span_el.create();
    const strip__ = __div.create();
    strip__.add("strip__x");
    strip__.css({
      key: "background",
      value: this.bgColor,
    });
    const copy___ = strip__;
    copy___.add("name__x");
    _span.text(getNameInitials(this.name));
    copy___.text(sanitizeFullName(this.name));
    el__two.child(_span);
    el__two.child(strip__);
    el_.child(el__two);
    if (!this.circleOnly) {
      el_.child(copy___);
    }
  }
}
