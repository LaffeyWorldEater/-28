/* function getResult(quantityText, unitAmount, extraAmount) {
    if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
    }
    const quantity = Number(quantityText);

    if (!Number.isFinite(quantity)) {
        return "Ошибка: введите число";
    }
    if (quantity <=0) {
        return "Ошибка: нужно положительное количество";
    }
    if (!Number.isInteger(quantity)) {
        return "Ошибка: нужно положительное целое количество";
    }
    const totalAmount = unitAmount * quantity + extraAmount;
    return "Итого:" + totalAmount;
}
*/
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
/*
const selectedName = "Вечер танцев";
const quantityText = "1";
const unitValue = 250;
const extraValue = 80;
let foundCount = 0;

console.log("Записей:", catalog.length);

for (const item of catalog) {
  console.log(item.position + ". " + item.name);
  console.log("Характеристика:", item.specs);
  console.log("Описание:", item.description);

  if (item.name === selectedName) {
    foundCount = foundCount + 1;
    console.log("Выбрано для расчёта:", item.name);
    const message = getResult(quantityText, unitValue, extraValue);
    console.log(message);
    console.log("Единица расчёта: усл. руб.");
  }
}

console.log("Найдено записей:", foundCount);

if (foundCount === 0) {
  console.log("Запись не найдена:", selectedName);
}

if (foundCount > 1) {
  console.log("Проверьте повторяющиеся названия");
}
*/
/* Выводит полностью список католога и его длину*/
console.table(catalog);
console.log(catalog.length);

/*Выводит таблицу с названиями */
const names = catalog.map(item => item.name);
console.log(names);

/*Выводит те значения где длина теккста больше 12 */
const longNames = catalog.filter(item => item.name.length > 12);
console.log(longNames.length);


/* При выборе таблички выдает ее подробное описание */
const selectedName = "Вечер танцев";
const found = catalog.find(item => item.name === selectedName);
console.log(found);
/*Выдает запись не найдена если не нашлась строка*/
if (found) {
  console.log(found.specs);
} else {
  console.log("Запись не найдена");
}



function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

console.log(filterByText(catalog, "").length);
console.log(filterByText(catalog, "Вечер"));
console.log(filterByText(catalog, "  танцев  ").length);
console.log(filterByText(catalog, "ВЕЧЕР"));






