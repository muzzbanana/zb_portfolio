const menu = document.querySelector(".drop-down-menu");
const close = document.querySelector(".icon");

function navToggle() {
  const compStylesMenu = window.getComputedStyle(menu);
  const top = compStylesMenu.getPropertyValue('top');
  if (top === '-410px') {
    menu.style.top = '0px';

  } else {
    menu.style.top = '-410px';
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

function hello() {
	var el = document.querySelector(".hello").eq(0);
	var text = el.text();
	var markup = '';
	for(i = 0; i < text.length; i++) {
		markup += '<span>'+text[i]+'</span>';
	}
	el.html(markup);
};


function lightToggle() {
  const homeContainer = document.querySelector(".home-container");
  const lights = document.querySelector(".hello");
  const toggle = document.querySelector(".on");
  const toggleStyle = window.getComputedStyle(toggle);
  const opacity = toggleStyle.getPropertyValue('opacity');
  // const containerStyle = window.getComputedStyle(homeContainer);
  if (opacity === '1') {
    lights.style.animation = 'blur 6s linear infinite both, fade 10ms ease-in-out alternate infinite both';
    lights.style.color = '#FEFE00';
    homeContainer.style.filter = 'brightness(1.2)'
  } else {
    lights.style.animation = 'blur 6s linear infinite both';
    lights.style.color = 'gray';
    homeContainer.style.filter = 'brightness(1.0)'
  }
}
