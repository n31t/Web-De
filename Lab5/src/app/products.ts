export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
  productLink: string;
  likes: number;
  category: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 298223,
    rating: 5,
    description: `
технология NFC: Да
цвет: черный
тип экрана: OLED, Super Retina XDR
диагональ: 6.1 дюйм
размер оперативной памяти: 4 ГБ
процессор: 6-ядерный Apple A15 Bionic
объем встроенной памяти: 128.0 ГБ
емкость аккумулятора: 3095.0 мАч`,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    likes :0,
    category: 'Iphone'
  },
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 73113,
    rating: 4,
    description: `
технология NFC: Нет
цвет: черный
тип экрана: IPS, сенсорный
диагональ: 6.79 дюйм
размер оперативной памяти: 8 ГБ
процессор: 8-ядерный MediaTek Helio G88
объем встроенной памяти: 256.0 ГБ
емкость аккумулятора: 5000.0 мАч`,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
    likes :0,
    category: 'Xiaomi'
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    price: 73113,
    rating: 5,
    description: `
технология NFC: Да
цвет: черный
тип экрана: OLED, Super Retina XDR display
диагональ: 6.1 дюйм
размер оперативной памяти: 6 ГБ
процессор: 6-ядерный Apple A16 Bionic
объем встроенной памяти: 128.0 ГБ
емкость аккумулятора: 3279.0 мАч`,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    likes :0,
    category: 'Iphone'
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone SE 2022 64Gb черный',
    price: 73113,
    rating: 5,
    description: `
    технология NFC: Да
    цвет: черный
    тип экрана: IPS, емкостный, мультитач, Retina HD Display
    диагональ: 4.7 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 64.0 ГБ
    емкость аккумулятора: 1821.0 мАч`,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    likes :0,
    category: 'Iphone'
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 14 128Gb голубой',
    price: 73113,
    rating: 4,
    description: `
    технология NFC: Да
    цвет: голубой
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.1 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 3279.0 мАч`,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h02/64481569701918.jpg?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000',
    likes :0,
    category: 'Iphone'
  },

  {
    id: 6,
    name: 'Смартфон Xiaomi Redmi Note 12 Pro 5G 8 ГБ/256 ГБ черный',
    price: 298223,
    rating: 4,
    description: `
    технология NFC: Да
    цвет: черный
    тип экрана: AMOLED, сенсорный
    диагональ: 6.67 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 8-ядерный MediaTek Dimensity 1080
    объем встроенной памяти: 256.0 ГБ
    емкость аккумулятора: 5000.0 мАч
    `,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcb/79755720294430.jpg?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-chernyi-109734243/?c=750000000',
    likes :0,
    category: 'Xiaomi'
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A34 5G 6 ГБ/128 ГБ серебристый',
    price: 298223,
    rating: 5,
    description: `
    технология NFC: Да
    цвет: серебристый
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.6 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 8-ядерный MediaTek Dimensity 1080
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 5000.0 мАч
    `,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h04/h6b/80075316527134.jpg?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a34-5g-6-gb-128-gb-serebristyi-109880741/?c=750000000',
    likes :0,
    category: 'Samsung'
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 15 128Gb голубой',
    price: 298223,
    rating: 5,
    description: `
    технология NFC: Да
    цвет: голубой
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.1 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A16 Bionic
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 3279.0 мАч
    `,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h07/83559339032606.png?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000',
    likes :0,
    category: 'Iphone'
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ бордовый',
    price: 298223,
    rating: 5,
    description: `
    технология NFC: Да
    цвет: бордовый
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.5 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 8-ядерный MediaTek Helio G99
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 5000.0 мАч
    `,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hec/80750150844446.jpg?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-bordovyi-110343527/?c=750000000',
    likes :0,
    category: 'Samsung'
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi Note 12 Pro 4G 8 ГБ/256 ГБ серый',
    price: 298223,
    rating: 5,
    description: `
    технология NFC: Да
    цвет: серый
    тип экрана: AMOLED, сенсорный, мультитач
    диагональ: 6.67 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 8-ядерный Qualcomm Snapdragon 732G
    объем встроенной памяти: 256.0 ГБ
    емкость аккумулятора: 5000.0 мАч
    `,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/ha0/79846423199774.jpg?format=gallery-medium',
    productLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-4g-8-gb-256-gb-seryi-109775102/?c=750000000',
    likes :0,
    category: 'Xiaomi'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/