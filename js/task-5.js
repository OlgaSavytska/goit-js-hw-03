const products = [{
    name: 'Радар',
    price: 1300,
    quantity: 4
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 2
  },
];



function getAllPropValues(arr, prop) {
  const mas = [];
  for (let el of arr) {

    // console.log(el[prop]);

    if (el[prop]) {
      mas.push(el[prop]);
      
      // console.log(mas);
    }
  }
  return mas;
  
}




console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []