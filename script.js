const itemName = "Акустический вечер";
const unitValue = 250;
const extraValue = 80;
const isTraining = true;




let quantityText = "2";
/* quantityText = "3"; */





const quantity = Number(quantityText);
const totalPrice = unitValue * quantity + extraValue;

console.log("Название:", itemName); /*Название: Акустический вечер*/
console.log("Учебные данные:", isTraining); /*Учебные данные: true */
console.log("Количество мест:", quantityText); /*Количество мест: 2*/
console.log("Общая стоимость:", totalPrice, "усл. руб."); /*Общая стоимость: 580 усл. руб. */
console.log("Тип строки количества:", typeof quantityText); /*Тип строки количества: string */
console.log("Тип итога:", typeof unitValue);
console.log("Тип учебного признака:", typeof isTraining);


/* ==================================
Название: Акустический вечер
Учебные данные: true
Количество мест: 2
Общая стоимость: 580 усл. руб.
Тип строки количества: string
Тип количества после преобразования: number
Тип итога: number
Тип учебного признака: boolean */