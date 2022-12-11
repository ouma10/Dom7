var articles = [
  {
    nom: "Eau micellaire ",
    image: "eau micellaire.jpg",
    prix: 60,
    quantite: 10,
  },
  {
    nom: "Ecran solaire",
    image: "ecran.jpg",
    prix: 65,
    quantite: 9,
  },
  {
    nom: "Gel lavant",
    image: "gel.jpg",
    prix: 50,
    quantite: 0,
  },
  {
    nom: "Crème mains",
    image: "gel.jpg",
    prix: 40,
    quantite: 5,
  },
  {
    nom: "Serum",
    image: "serum.jpg",
    prix: 95,
    quantite: 12,
  },
  {
    nom: "huile capillaire",
    image: "huile.jpg",
    prix: 220,
    quantite: 12,
  },
];

for (let article of articles) {
  console.log(article);
  let articlesContainer = document.querySelector(".articles-container");

  let newArticle = document.createElement("div");
  newArticle.setAttribute("class", "card");
  if (article.quantite > 0) {
    newArticle.innerHTML = `
    <div class="card">
              <img src="../assets/${article.image}" class="card-image" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${article.nom}</h5>
                  <p class="card-text">${article.prix}DT</p>
                  <p class="card-text">En Stock</p>
                  <input type='button' value='+' class='incBtn'>
                  <input type='button' value='1' class='qte'>
                  <input type='button' value='-' class='decBtn'>
                  <button type="button" class="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
  </svg></button>
  </div>
                <button href="#" class="btn btn-primary">Delete</button>
                </div>


  `;
  } else {
    newArticle.innerHTML = `
    <div class="card">
     <img src="../assets/${article.image}" class="card-image" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${article.nom}</h5>
                  <p class="card-text">${article.prix}DT</p>
                  <p class="card-text">Epuisé</p>
                  <input type='button' value='+' class='incBtn'>
                  <input type='button' value='1' class='qte'>
                  <input type='button' value='-' class='decBtn'>
                  <button type="button" class="button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
  </svg></button>
              </div>
              <button href="#" class="btn btn-primary">Delete</button>
              </div>
              `;
  }

  articlesContainer.append(newArticle);
}
let incBtn = document.getElementsByClassName("incBtn");
console.log(incBtn);
let decBtn = document.getElementsByClassName("decBtn");
for (let btn of incBtn) {
  btn.addEventListener("click", function () {
    btn.nextElementSibling.value++;
  });
}
for (let btn of decBtn) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.value > 1)
      btn.previousElementSibling.value--;
  });
}

let deleteBtn = document.querySelectorAll(".btn");
for (let btn of deleteBtn) {
  btn.addEventListener("click", function () {
    console.log(btn.parentElement)
    btn.parentElement.remove();
  });
}
let icons = document.getElementsByClassName("bi-suit-heart");
function switchcolor(event) {
  event.preventDefault();
  if (event.target.style.color !== "red") event.target.style.color = "red";
  else {
    event.target.style.color = "black";
  }
}
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", switchcolor);
}

