const menu = document.querySelector(".drop-down-menu");
const menuItems = document.querySelector(".menuitems");
const menuList = document.querySelector(".menulist");

const page = location.pathname.split("/")[1];
const navOption = document.querySelector(".nav-" + page);
const inkEnvyImage = document.querySelector(".ink-envy-image");
const inkEnvyInfo = document.querySelector(".ink-envy-slide");
if (navOption) {
  navOption.className += " active";
}

function navToggle() {
  const compStylesMenu = window.getComputedStyle(menu);
  const top = compStylesMenu.getPropertyValue('top');
  if (top === '-410px') {
    menu.style.top = '0px';
    menu.setAttribute('aria-hidden', false);
    menuItems.setAttribute('aria-hidden', false);
    menuList.setAttribute('aria-hidden', false);
  } else {
    menu.style.top = '-410px';
    menu.setAttribute('aria-hidden', true);
    menuItems.setAttribute('aria-hidden', true);
    menuList.setAttribute('aria-hidden', true);
  }
}

const header = document.querySelector('.header-wrapper');

// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = '-410px';
  }
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});

function resumeBar() {
  const skillsContainer = document.querySelector(".skills-block");
  const leftSide = document.querySelector(".left-side");
  const skillsStyle = window.getComputedStyle(skillsContainer);
  const chevron = document.querySelector(".chevron");
  const contact = document.querySelector(".contact-details");
  const design = document.querySelector(".design-details");
  const tools = document.querySelector(".tools-details");
  const column = skillsStyle.getPropertyValue('grid-column-end');

  if (column === '1') {
    chevron.href = "#";
    if (+window.innerWidth >= 400) {
      skillsContainer.style.gridColumnEnd = '7';
      leftSide.style.gridColumnEnd = '7'
      chevron.style.left = '40%';
    } else if (+window.innerWidth >= 500){ 
      skillsContainer.style.gridColumnEnd = '6';
      leftSide.style.gridColumnEnd = '6'
      chevron.style.left = '35%';
    } else if (+window.innerWidth >= 600){ 
      skillsContainer.style.gridColumnEnd = '5';
      leftSide.style.gridColumnEnd = '5'
      chevron.style.left = '30%';
    } else {
      skillsContainer.style.gridColumnEnd = '9';
      leftSide.style.gridColumnEnd = '9';
      chevron.style.left = '50%';
    }
    chevron.classList.add("paused");
    skillsContainer.style.zIndex = '3';
    chevron.style.float = 'right';
    chevron.style.rotate = '180deg';
    contact.style.display = 'block';
    design.style.display = 'block';
    tools.style.display = 'block';
  } else {
    chevron.href = "#contact-details";
    skillsContainer.style.gridColumnEnd = '1';
    leftSide.style.gridColumnEnd = '3';
    skillsContainer.style.zIndex = '4';
    chevron.style.float = 'none';
    chevron.style.marginRight = '0';
    chevron.style.rotate = '360deg';
    contact.style.display = 'none';
    chevron.style.left = '10%';
    chevron.classList.remove("paused");
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
    const leftSide = document.querySelector(".left-side");

    if (+window.innerWidth >= 768) {
      chevron.style.display = 'none';
      skillsContainer.style.zIndex = '3';
      skillsContainer.style.gridColumnEnd = '4';
      leftSide.style.gridColumnEnd = '4';
      title.style.gridColumnStart = '3';
      download.style.gridColumnEnd = '4';
      experience.style.gridColumnStart = '4';
      contact.style.display = 'block';
      design.style.display = 'block';
      tools.style.display = 'block';
      downloadButton.style.display = 'flex';

      if ( +window.innerWidth < 1280) {
        skillsContainer.style.gridColumnEnd = '5';
        leftSide.style.gridColumnEnd = '5';
        title.style.gridColumnStart = '4';
        download.style.gridColumnEnd = '5';
        experience.style.gridColumnStart = '5';
      }
    } else {
      skillsContainer.style.gridColumnEnd = '1';
      leftSide.style.gridColumnEnd = '3';
      skillsContainer.style.zIndex = '4';
      chevron.style.display = 'block';
      chevron.style.float = 'none';
      chevron.style.left = '10%';
      chevron.style.marginRight = '0';
      chevron.style.rotate = '0';
      contact.style.display = 'none';
      design.style.display = 'none';
      tools.style.display = 'none';
      title.style.gridColumnStart = '1';
      downloadButton.style.display = 'none';
      experience.style.gridColumnStart = '3';
    }
  }
}

window.onload = function() {
  resizeScreen();
};
