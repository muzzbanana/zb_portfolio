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

function resumeBar() {
  const skillsContainer = document.querySelector(".skills-block");
  const skillsStyle = window.getComputedStyle(skillsContainer);
  const chevron = document.querySelector(".chevron");
  const contact = document.querySelector(".contact-details");
  const design = document.querySelector(".design-details");
  const tools = document.querySelector(".tools-details");
  const column = skillsStyle.getPropertyValue('grid-column-end');

  if (column === '1') {
    skillsContainer.style.gridColumnEnd = '7';
    skillsContainer.style.zIndex = '3';
    chevron.style.float = 'right';
    chevron.style.marginRight = '20px';
    chevron.style.rotate = '180deg';
    contact.style.display = 'block';
    design.style.display = 'block';
    tools.style.display = 'block';
  } else {
    skillsContainer.style.gridColumnEnd = '1';
    skillsContainer.style.zIndex = '4';
    chevron.style.float = 'none';
    chevron.style.marginRight = '0';
    chevron.style.rotate = '0deg';
    contact.style.display = 'none';
    design.style.display = 'none';
    tools.style.display = 'none';
  }
}

window.addEventListener('resize', resizeScreen);

function resizeScreen() {
  const skillsContainer = document.querySelector(".skills-block");
  const chevron = document.querySelector(".chevron");
  const contact = document.querySelector(".contact-details");
  const design = document.querySelector(".design-details");
  const tools = document.querySelector(".tools-details");

  console.log('resizeScreen', window.innerWidth);
  if (+window.innerWidth >= 768) {
    chevron.style.display = 'none';
    skillsContainer.style.zIndex = '3';
    skillsContainer.style.gridColumnEnd = '4';
    contact.style.display = 'block';
    design.style.display = 'block';
    tools.style.display = 'block';
  } else {
    skillsContainer.style.gridColumnEnd = '1';
    skillsContainer.style.zIndex = '4';
    chevron.style.display = 'block';
    chevron.style.float = 'none';
    chevron.style.marginRight = '0';
    chevron.style.rotate = '0deg';
    contact.style.display = 'none';
    design.style.display = 'none';
    tools.style.display = 'none';
  }
}

window.onload = function() {
  resizeScreen();
};
