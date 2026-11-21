const catalog = [
    {
    position: 1,
    name: "Вечер романсов",
    specs: "Зал 1",
    description: "Романы, живые актёры"
    },
    {
    position: 2,
    name: "В кругу друзей",
    specs: "Зал 2",
    description: "Знакомства, встречи"
    },
    {
    position: 3,
    name: "Вечер танцев",
    specs: "Зал 3",
    description: "Танцы, музыка"
    }
];
const status = document.querySelector("#status");
status.textContent = "Записей в каталоге: " + catalog.length;


const first = catalog[0].name;
status.textContent = first + " — " + catalog.length + " записей";



const namesList = document.querySelector("#names");

function renderNames() {
  namesList.replaceChildren();
  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }
}


const showButton = document.querySelector("#show-names");
showButton.addEventListener("click", renderNames);


const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  status.textContent = "Форма отправлена";
});

/*document.addEventListener("DOMContentLoaded", function(){
    const eg = document.querySelector('#g');
    if (eg) {eg.textContent = "h2o";

    }
})
myH2.textContent = "H2O это круто"*/