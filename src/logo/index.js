const sanitizeFullName = (name) => {
  if (!name) return name;
  const name_array = name.split(" ");
  if (name_array.length > 2) {
    return `${name_array[0]} ${name_array[1].charAt(0)}. ${name_array[2]}`;
  } else if (name_array.length <= 2) {
    return name;
  }
};

const getNameInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((e) => e.charAt(0))
    .join("");
import "../styles/logo.css";
export class Logo {
  constructor(selector, name, bgColor, textColor, circleOnly = true) {
    this.name = name;
    this.bgColor = bgColor;
    this.textColor = textColor;
    this.circleOnly = circleOnly;
    this.selector = selector;
  }

  __init__() {
    const template = `
      <div style="color: ${
        this.textColor
      }" class="d-flex items-center position-relative space-x-4">
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
    document.querySelector(this.selector).innerHTML += template;
  }
}
