(btn = document.getElementsByClassName("btn")),
    (banner = document.getElementById("banner"));

btn[0].onclick = function () {
    banner.src =
        "eviron1.jpg";
    animation();
    this.classList.add("active");
};

btn[1].onclick = function () {
    banner.src =
        "environ2.jpg";
    animation();
    this.classList.add("active");
};

btn[2].onclick = function () {
    banner.src =
        "environ4.jpg";
    animation();
    this.classList.add("active");
};

function animation() {
    banner.classList.add("zoom");
    setTimeout(function () {
        banner.classList.remove("zoom");
    }, 500);

    for (b of btn) {
        b.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var modeSwitch = document.querySelector(".mode-switch");
  
    modeSwitch.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");
      modeSwitch.classList.toggle("active");
    });
  });
  VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 15,
    speed: 300,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1.05,
});

