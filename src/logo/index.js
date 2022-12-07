import { isEmpty } from "../utils/index";
import "../styles/logo.css";

const sanitizeFullName = (name) => {
  if (!name) return name;
  name = name.trim();
  const name_array = name
    .split(" ")
    .map((e) => e.trim())
    .filter((e) => !isEmpty(e));

  if (name_array.length > 2) {
    return `${name_array[0]} ${name_array[1].charAt(0)}. ${
      name_array[name_array.length - 1]
    }`;
  } else if (name_array.length <= 2) {
    return name;
  }
};

const getNameInitials = (name) => {
  name = name
    .trim()
    .split(" ")
    .map((e) => e.trim())
    .filter((e) => !isEmpty(e))
    .map((e) => e.charAt(0));
  return `${name[0]}${name[name.length - 1]}`;
};

export class Logo {
  constructor(selector, name, bgColor, textColor, circleOnly = true) {
    this.name = name.toUpperCase();
    this.bgColor = bgColor;
    this.textColor = textColor;
    this.circleOnly = circleOnly;
    this.selector = selector;
  }

  __init__() {
    const selector = document.querySelector(this.selector);
    selector.innerHTML = `
      <div style="color: ${
        this.textColor
      }" class="d-flex sm-flex-col items-center position-relative space-x-4">
              <div style="color: ${this.textColor}; border: 2px solid ${
      this.textColor
    }" class="d-flex items-center circle__x">
                <span>${getNameInitials(this.name)}</span>
                <div style="background: ${this.bgColor}" class="strip__x"></div>
              </div>
             ${
               !this.circleOnly
                 ? `<span class="big__name">${sanitizeFullName(
                     this.name
                   )}</span>`
                 : ""
             }
      </div>
    `;
  }
}
