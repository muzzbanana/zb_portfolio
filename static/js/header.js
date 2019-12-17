const menu = document.querySelector(".drop-down-menu");
const close = document.querySelector(".icon");

const page = location.pathname.split("/")[1];
const navOption = document.querySelector(".nav-" + page);
navOption.className += " active";


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

const header = document.querySelector('.header-wrapper');

// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = 'unset';
  }
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});


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
    console.log('180');
    if (+window.innerWidth >= 768) {
      skillsContainer.style.gridColumnEnd = '5';
    } else {
      skillsContainer.style.gridColumnEnd = '9';
    }
    skillsContainer.style.zIndex = '3';
    chevron.style.float = 'right';
    chevron.style.rotate = '180deg';
    contact.style.display = 'block';
    design.style.display = 'block';
    tools.style.display = 'block';
  } else {
    console.log('0');
    skillsContainer.style.gridColumnEnd = '1';
    skillsContainer.style.zIndex = '4';
    chevron.style.float = 'none';
    chevron.style.marginRight = '0';
    chevron.style.rotate = '360deg';
    contact.style.display = 'none';
    design.style.display = 'none';
    tools.style.display = 'none';
  }
}

window.addEventListener('resize', resizeScreen);

function resizeScreen() {
  if (page === 'resume') {
    const skillsContainer = document.querySelector(".skills-block");
    const chevron = document.querySelector(".chevron");
    const contact = document.querySelector(".contact-details");
    const design = document.querySelector(".design-details");
    const tools = document.querySelector(".tools-details");
    const download = document.querySelector(".download-block");
    const downloadButton = document.querySelector(".download-button");
    const title = document.querySelector(".title-block");
    const experience = document.querySelector(".experience-block");
    const education = document.querySelector(".education-block");
    const blackBG = document.querySelector(".black-bg");

    console.log('resizeScreen', window.innerWidth);
    if (+window.innerWidth >= 768) {
      chevron.style.display = 'none';
      skillsContainer.style.zIndex = '3';
      skillsContainer.style.gridColumnEnd = '4';
      title.style.gridColumnStart = '3';
      download.style.gridColumnEnd = '4';
      experience.style.gridColumnStart = '4';
      education.style.gridColumnStart = '4';
      blackBG.style.gridColumnStart = '3';
      contact.style.display = 'block';
      design.style.display = 'block';
      tools.style.display = 'block';
      downloadButton.style.display = 'flex';

      if ( +window.innerWidth < 1200) {
        skillsContainer.style.gridColumnEnd = '5';
        title.style.gridColumnStart = '4';
        download.style.gridColumnEnd = '5';
        experience.style.gridColumnStart = '5';
        education.style.gridColumnStart = '5';
        blackBG.style.gridColumnStart = '4';
      }
    } else {
      skillsContainer.style.gridColumnEnd = '1';
      skillsContainer.style.zIndex = '4';
      chevron.style.display = 'block';
      chevron.style.float = 'none';
      chevron.style.marginRight = '0';
      chevron.style.rotate = '0';
      contact.style.display = 'none';
      design.style.display = 'none';
      tools.style.display = 'none';
      title.style.gridColumnStart = '1';
      downloadButton.style.display = 'none';
      experience.style.gridColumnStart = '2';
      education.style.gridColumnStart = '2';
      blackBG.style.gridColumnStart = '1';
    }
  }
  
}

window.onload = function() {
  resizeScreen();
};
