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
  const top = compStylesMenu.getPropertyValue("top");
  if (top === "-410px") {
    menu.style.top = "0px";
    menu.setAttribute("aria-hidden", false);
    menuItems.setAttribute("aria-hidden", false);
    menuList.setAttribute("aria-hidden", false);
  } else {
    menu.style.top = "-410px";
    menu.setAttribute("aria-hidden", true);
    menuItems.setAttribute("aria-hidden", true);
    menuList.setAttribute("aria-hidden", true);
  }
}

const header = document.querySelector(".header-wrapper");

// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener("scroll", function () {
  // detects new state and compares it with the new one
  if (document.body.getBoundingClientRect().top > scrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-410px";
  }
  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;
});

function resumeBar() {
  const skillsContainer = document.querySelector(".skills-block");
  const leftSide = document.querySelector(".left-side");
  const skillsStyle = window.getComputedStyle(skillsContainer);
  const chevron = document.querySelector(".chevron");
  const contact = document.querySelector(".contact-details");
  const design = document.querySelector(".design-details");
  const tools = document.querySelector(".tools-details");
  const column = skillsStyle.getPropertyValue("grid-column-end");

  if (column === "1") {
    chevron.href = "#";
    if (+window.innerWidth >= 400) {
      skillsContainer.style.gridColumnEnd = "7";
      leftSide.style.gridColumnEnd = "7";
      chevron.style.left = "40%";
    } else if (+window.innerWidth >= 500) {
      skillsContainer.style.gridColumnEnd = "6";
      leftSide.style.gridColumnEnd = "6";
      chevron.style.left = "35%";
    } else if (+window.innerWidth >= 600) {
      skillsContainer.style.gridColumnEnd = "5";
      leftSide.style.gridColumnEnd = "5";
      chevron.style.left = "30%";
    } else {
      skillsContainer.style.gridColumnEnd = "9";
      leftSide.style.gridColumnEnd = "9";
      chevron.style.left = "50%";
    }
    chevron.classList.add("paused");
    skillsContainer.style.zIndex = "3";
    chevron.style.float = "right";
    chevron.style.rotate = "180deg";
    contact.style.display = "block";
    design.style.display = "block";
    tools.style.display = "block";
  } else {
    chevron.href = "#contact-details";
    skillsContainer.style.gridColumnEnd = "1";
    leftSide.style.gridColumnEnd = "3";
    skillsContainer.style.zIndex = "4";
    chevron.style.float = "none";
    chevron.style.marginRight = "0";
    chevron.style.rotate = "360deg";
    contact.style.display = "none";
    chevron.style.left = "10%";
    chevron.classList.remove("paused");
    design.style.display = "none";
    tools.style.display = "none";
  }
}

window.addEventListener("resize", resizeScreen);

function resizeScreen() {
  if (page === "resume") {
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
      chevron.style.display = "none";
      skillsContainer.style.zIndex = "3";
      skillsContainer.style.gridColumnEnd = "4";
      leftSide.style.gridColumnEnd = "4";
      title.style.gridColumnStart = "3";
      download.style.gridColumnEnd = "4";
      experience.style.gridColumnStart = "4";
      contact.style.display = "block";
      design.style.display = "block";
      tools.style.display = "block";
      downloadButton.style.display = "flex";

      if (+window.innerWidth < 1280) {
        skillsContainer.style.gridColumnEnd = "5";
        leftSide.style.gridColumnEnd = "5";
        title.style.gridColumnStart = "4";
        download.style.gridColumnEnd = "5";
        experience.style.gridColumnStart = "5";
      }
    } else {
      skillsContainer.style.gridColumnEnd = "1";
      leftSide.style.gridColumnEnd = "3";
      skillsContainer.style.zIndex = "4";
      chevron.style.display = "block";
      chevron.style.float = "none";
      chevron.style.left = "10%";
      chevron.style.marginRight = "0";
      chevron.style.rotate = "0";
      contact.style.display = "none";
      design.style.display = "none";
      tools.style.display = "none";
      title.style.gridColumnStart = "1";
      downloadButton.style.display = "none";
      experience.style.gridColumnStart = "3";
    }
  }
}

window.onload = function () {
  resizeScreen();
};

if (page === "work") {
  const workContainer = document.querySelector(".work-container");

  let slide = workContainer.querySelectorAll(".slide");
  let button = workContainer.querySelectorAll(".btn");
  let current = 0;

  console.log("logging", slide, button);

  slide[current].style.zIndex = 2;
  button[0].classList.add("inactive");
  button[button.length - 1].classList.add("inactive");

  button = workContainer.querySelectorAll(".btn:not(.inactive");

  for (element = 0; element < button.length; element++) {
    button[element].addEventListener("click", function () {
      for (i = 0; i < slide.length; i++) {
        workContainer.querySelectorAll(".slide-img")[i].classList.add("active");
        workContainer.querySelectorAll(".button")[i].style.opacity = "0";
        workContainer
          .querySelectorAll(".slide-content h2")
          [i].classList.add("active");
        workContainer
          .querySelectorAll(".slide-content p")
          [i].classList.add("active");
        workContainer
          .querySelectorAll(".slide-content a")
          [i].classList.add("active");
      }

      if (this.classList.contains("button-right")) {
        current++;
        if (current > slide.length - 1) {
          current = slide.length - 1;
        }
      }
      if (this.classList.contains("button-left")) {
        current--;
        if (current < 0) {
          current = 0;
        }
      }

      setTimeout(function () {
        for (e = 0; e < slide.length; e++) {
          slide[e].style.zIndex = "0";
        }
        slide[current].style.zIndex = "2";

        for (i = 0; i < slide.length; i++) {
          workContainer
            .querySelectorAll(".slide-img")
            [i].classList.remove("active");
          workContainer.querySelectorAll(".button")[i].style.opacity = "1";
          workContainer
            .querySelectorAll(".slide-content h2")
            [i].classList.remove("active");
          workContainer
            .querySelectorAll(".slide-content p")
            [i].classList.remove("active");
          workContainer
            .querySelectorAll(".slide-content a")
            [i].classList.remove("active");
        }
      }, 1000);
    });
  }
}

function getPos(current, diff, numOfItems) {
  console.log(current, diff);
  // const diff = active - current;

  if (+current + diff > numOfItems) {
    console.log("answer", +current + diff);
    return numOfItems - +current;
  }

  if (+current + diff < 0) {
    const delta = +current + diff;
    const val = delta - diff;
    return numOfItems - val;
  }

  return +current + diff;
}

if (page === "ink-envy" || page === "nest-egg") {
  const carouselList = document.querySelector(".wireframe-carousel__list");
  const carouselItems = document.querySelectorAll(".wireframe-carousel__item");
  const elems = Array.from(carouselItems);

  carouselList.addEventListener("click", function (event) {
    var newActive = event.target;
    var isItem = newActive.closest(".wireframe-carousel__item");

    if (
      !isItem ||
      newActive.classList.contains("wireframe-carousel__item_active")
    ) {
      return;
    }

    update(newActive);
  });

  const update = function (newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 2);
    const prev = elems.find((elem) => elem.dataset.pos == 1);
    const next = elems.find((elem) => elem.dataset.pos == 3);
    const first = elems.find((elem) => elem.dataset.pos == 0);
    const last = elems.find((elem) => elem.dataset.pos == 4);
    const behind = elems.find((elem) => elem.dataset.pos == 5);

    current.classList.remove("wireframe-carousel__item_active");

    let diff = 100;
    console.log("reset");

    [current, prev, next, first, last, behind].forEach((item) => {
      var itemPos = item.dataset.pos;

      if (diff === 100) {
        diff = +itemPos - +newActivePos;
      }

      item.dataset.pos = getPos(itemPos, diff, 5);
    });
  };

  const carouselList_final = document.querySelector(
    ".final-proto-carousel__list"
  );
  const carouselItems_final = document.querySelectorAll(
    ".final-proto-carousel__item"
  );
  const elems_final = Array.from(carouselItems_final);

  carouselList_final.addEventListener("click", function (event) {
    var newActive = event.target;
    var isItem = newActive.closest(".final-proto-carousel__item");

    if (
      !isItem ||
      newActive.classList.contains("final-proto-carousel__item_active")
    ) {
      return;
    }

    update_final(newActive);
  });

  const update_final = function (newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems_final.find((elem) => elem.dataset.pos == 2);
    const prev = elems_final.find((elem) => elem.dataset.pos == 1);
    const next = elems_final.find((elem) => elem.dataset.pos == 3);
    const first = elems_final.find((elem) => elem.dataset.pos == 0);
    const last = elems_final.find((elem) => elem.dataset.pos == 4);

    current.classList.remove("final-proto-carousel__item_active");

    let diff = 100;
    console.log("reset");

    [current, prev, next, first, last].forEach((item) => {
      var itemPos = item.dataset.pos;

      if (diff === 100) {
        diff = +itemPos - +newActivePos;
      }

      item.dataset.pos = getPos(itemPos, diff, 4);
    });
  };
}
