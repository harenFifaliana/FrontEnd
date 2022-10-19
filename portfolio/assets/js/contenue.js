/* SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* HOME SWIPER */
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: "true",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* change body's background color */

let root = document.documentElement;

homeSwiper.on("transitionEnd", function (e) {
    if (this.activeIndex == 1) {
        root.style.setProperty(
            "--body-color",
            "linear-gradient(to right, #2E0916, #200A2B)"
        );
        root.style.setProperty("--sub", "#ff5b79");
        root.style.setProperty("--title-color", "#ffffff");
        root.style.setProperty(
            "--container-color",
            "linear-gradient(136deg, #2E0916, #200A2B)"
        );
    }
    if (this.activeIndex == 2) {
        root.style.setProperty(
            "--body-color",
            "linear-gradient(to right, #E8CAFB, #6A4FB6)"
        );
        root.style.setProperty("--sub", "#303056");
        root.style.setProperty("--title-color", "#303056");
        root.style.setProperty(
            "--container-color",
            "linear-gradient(136deg, #E8CAFB, #6A4FB6)"
        );
    }
    if (this.activeIndex == 3) {
        root.style.setProperty(
            "--body-color",
            "linear-gradient(to right, #5B874B, #0C3720)"
        );
        root.style.setProperty("--sub", "#ffffff");
        root.style.setProperty("--title-color", "#ffffff");
        root.style.setProperty(
            "--container-color",
            "linear-gradient(136deg, #5B874B, #0C3720)"
        );
    }
});
/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* NEW SWIPER */
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    spaceBetween: 16,
});

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/* SHOW SCROLL UP */
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 460) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
    interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });

// slide menu
console.clear();
const bgUrls = [
    "https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80",
    "https://images.unsplash.com/photo-1661937303423-f251f4b80c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1661836890977-1cc392056094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1661895581832-51c8e3538b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1661887248879-6d3047b8982b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1661856791200-a8e281f65f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1661884967942-fd9be05be205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1661945469251-9950fd1c1caa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1661901060088-32dbfeb040df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1661159633818-d723d41c9f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];
const container = document.querySelector(".contenue");
const cards = document.querySelectorAll(".card");
let xVal = 0;
let xRate = 20;
let sVal = 1;
let sRate = 0.1;
let zIndex = 1;
let forwardCount = 0;

//INITAL SETUP
for (let i = 0; i < cards.length; i++) {
    cards[i].style.setProperty("--xVal", `${xVal}%`);
    cards[i].style.setProperty("--sVal", `${sVal}`);
    cards[i].style.setProperty("--z-index", `${zIndex}`);
    cards[i].style.backgroundImage = `url(${bgUrls[i]})`;
    xVal += xRate;
    sVal -= sRate;
    zIndex--;
}

const moveForward = () => {
    if (forwardCount < cards.length - 1) {
        cards.forEach((card) => {
            let xVal = parseFloat(
                card.style.getPropertyValue("--xVal").replace("%", "")
            );
            let sVal = parseFloat(card.style.getPropertyValue("--sVal"));
            let zInd = parseFloat(card.style.getPropertyValue("--z-index"));

            card.style.setProperty("--xVal", `${xVal - xRate}%`);

            if (xVal <= 0) {
                card.style.setProperty("--sVal", `${sVal - sRate}`);
                card.style.setProperty("--z-index", zInd - 1);
            } else {
                card.style.setProperty("--sVal", `${sVal + sRate}`);
                card.style.setProperty("--z-index", zInd + 1);
            }
        });

        forwardCount++;
    }
};

const moveBackwards = () => {
    if (forwardCount) {
        cards.forEach((card) => {
            let xVal = parseFloat(
                card.style.getPropertyValue("--xVal").replace("%", "")
            );
            let sVal = parseFloat(card.style.getPropertyValue("--sVal"));
            let zInd = parseFloat(card.style.getPropertyValue("--z-index"));

            card.style.setProperty("--xVal", `${xVal + xRate}%`);

            if (xVal < 0) {
                card.style.setProperty("--sVal", `${sVal + sRate}`);
                card.style.setProperty("--z-index", zInd + 1);
            } else {
                card.style.setProperty("--sVal", `${sVal - sRate}`);
                card.style.setProperty("--z-index", zInd - 1);
            }
        });

        forwardCount--;
    }
};

contenue.addEventListener("wheel", (e) => {
    if (e.deltaY === 100) {
        moveForward();
    } else {
        moveBackwards();
    }
});

// fin slide menu
