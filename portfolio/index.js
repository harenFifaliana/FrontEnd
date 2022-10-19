function getContainer() {
    let header = document.querySelector("header");
    let contenue = document.querySelector("#body");
    let footer = document.querySelector("footer");
    return {
        header,
        contenue,
        footer,
    };
}

const { header, contenue, footer } = getContainer();

const loadContent = async () => {};

// Fonction recuperer contenue : parametre (balise ou identifiant : string)
const loadHTML = (url, div) => {
    fetch(url)
        .then((reponse) => reponse.text())
        .then((contenue) => (document.getElementById(div).innerHTML = contenue));
};


// loadHTML("./header/header.html","entete")
loadHTML("./contenue/contenue.html","body")
loadHTML("./footer/footer.html","piedPage")