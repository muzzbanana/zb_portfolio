const menu = document.querySelector(".drop-down-menu");
const close = document.querySelector(".icon");

function navToggle() {
  const compStylesMenu = window.getComputedStyle(menu);
  const top = compStylesMenu.getPropertyValue('top');
  if (top === '-400px') {
    menu.style.top = '0px';

  } else {
    menu.style.top = '-400px';
  }
}

// media query event handler
const mql = window.matchMedia("(min-width: 768px)");
mql.addListener(widthChange);
widthChange(mql);


function widthChange(mql) {
  if (mql.matches) {
    const svg = document.querySelector(".hamburger-svg")
    const group = document.querySelector(".hamburger-group")
    svg.setAttribute('width', '62px');
    svg.setAttribute('height', '27px');
    group.setAttribute('d', "M1.5 1.5h59 M24.5 13.5h36.465 M37.5 25.5h22.534")
  } else {
    const svg = document.querySelector(".hamburger-svg")
    const group = document.querySelector(".hamburger-group")
    svg.setAttribute('width', '38px');
    svg.setAttribute('height', '10px');
    group.setAttribute('d', "M1 1.5h36M23 8.5h14")
  }
}

