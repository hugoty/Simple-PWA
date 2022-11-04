const container = document.querySelector(".container");
const coffees = [
  {
    name: "Bulbizarre",
    image: "images/pokemon1.png"
  },
  {
    name: "Salamèche",
    image: "images/pokemon2.png"
  },
  {
    name: "Carapuce",
    image: "images/pokemon3.png"
  },
  {
    name: "Aspicot",
    image: "images/pokemon4.png"
  },
  {
    name: "Roucool",
    image: "images/pokemon5.png"
  },
  {
    name: "Rattata",
    image: "images/pokemon6.png"
  },
  {
    name: "Piafabec",
    image: "images/pokemon7.png"
  },
  {
    name: "Abo",
    image: "images/pokemon8.png"
  },
  {
    name: "Pikachu",
    image: "images/pokemon9.png"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/sw.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}