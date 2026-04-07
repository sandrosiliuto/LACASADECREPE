export const MENU_DATA = {
  ensaladas: [
    { name: "Griega", price: "10.80€", description: "Lechuga, tomate, queso feta, pepino, cebolla, pimientos, aceitunas negras" },
    { name: "Quinoa", price: "10.90€", description: "Lechuga, rucula, quínoa, tomate cherry, pepino, aceitunas negras, pimientos, cebolla" },
    { name: "La casa del Crepe", price: "11.50€", description: "Lechuga, tomate, champiñones, atún, aguacate, cebolla, huevo, mayonesa, orégano" },
    { name: "Pan", price: "1.50€", description: "Ración de pan" },
    { name: "Ibérica", price: "11.90€", description: "Lechuga, rucula, jamón serrano, tomate cherry, queso de cabra, aguacate, fresas naturales, nueces" },
    { name: "Chicken Run", price: "11.90€", description: "Lechuga, rucula, tomate cherry, pollo cajun, queso parmesano, manzana, cebolla crujiente, pasas sultanas, miel de palma, orégano" },
    { name: "Cesar", price: "11.50€", description: "Lechuga, rucula, tomate, pollo cajun, parmesano, crouton, salsa cesar, oregano" },
    { name: "Nemo", price: "11.90€", description: "Lechuga, rucula, tomate, salmon, queso de cabra a la plancha, alcaparras, pepino, aceitunas, salsa de yogur, eneldo" },
    { name: "Ithamo", price: "11.50€", description: "Lechuga, rucula, tomate, atun, cebolla, gambas, pimientos, pepino, salsa rosa, oregano" },
  ],
  crepes: [
    { name: "Fiona", price: "9.90€", description: "Queso amarillo, pesto, tomate Cherry, parmesano, rúcula, pepino, aceite de oliva" },
    { name: "Lara Croft", price: "9.90€", description: "Papas, queso semicurado, champiñones, almogrote" },
    { name: "Olivia", price: "10.10€", description: "Queso amarillo, espinacas, queso azul, papas, champiñones, cebolla, nata" },
    { name: "Cheeseland", price: "9.80€", description: "Queso, almogrote, queso azul, queso de cabra, queso semicurado, orégano" },
    { name: "Alekay", price: "7.10€", description: "Queso amarillo, salchicha, kétchup, cebolla crujiente" },
  ],
  crepesSalados: [
    {
      category: "Con Jamón York",
      items: [
        { name: "El Principito", price: "7.10€", description: "Queso amarillo, jamón, bechamel" },
        { name: "Mafalda", price: "7.80€", description: "Queso amarillo, jamón, tomate, orégano" },
        { name: "Bob esponja", price: "8.10€", description: "Queso amarillo, jamon, champiñones, bechamel" },
        { name: "Popeye", price: "8.10€", description: "Queso amarillo, jamón, espinacas, bechamel" },
      ]
    },
    {
      category: "Con Jamón Serrano",
      items: [
        { name: "Gaudi", price: "10.90€", description: "Queso semicurado, jamón serrano, aguacate, tomate natural, nata, orégano" },
        { name: "Darek", price: "10.90€", description: "Queso, jamon serrano, mozzarella, champiñones, aceite de oliva, rucula" },
        { name: "Picaso", price: "9.90€", description: "Queso, jamon serrano, champiñones, bechamel" },
        { name: "Roma", price: "10.90€", description: "Queso amarillo, jamon serrano, rucula, parmesano, tomate cherry" },
      ]
    },
    {
      category: "Con Pollo",
      items: [
        { name: "Tara", price: "10.80€", description: "Queso amarillo, huevo duro, pollo, papas, mojo rojo" },
        { name: "Lolita", price: "8.90€", description: "Queso amarillo, pollo, mojo de aguacate" },
        { name: "King Arthur", price: "10.90€", description: "Queso, jamón, pollo, bacon, huevo frito, bechamel, salsa de tomate" },
        { name: "Koothrappali", price: "10.50€", description: "Queso amarillo, pollo, piña, curri, cebolla, nata" },
      ]
    },
    {
      category: "Con Pescado",
      items: [
        { name: "Sebastián", price: "10.50€", description: "Queso amarillo, atún, pico de gallo, pimientos, huevo duro, mojo de aguacate, orégano" },
        { name: "Simpson", price: "10.80€", description: "Queso amarillo, gambas, atún, cebolla, tomate natural, nata" },
        { name: "Ariel", price: "10.20€", description: "Queso amarillo, atun, jamon, piña, salsa de tomate, oregano" },
        { name: "Charlot", price: "10.80€", description: "Queso amarillo, salmon, cebolla, tomate, alcaparras, eneldo" },
        { name: "Tritón", price: "10.90€", description: "Queso amarillo, salmon, espinacas, cebolla, pimientos, nata, limón" },
      ]
    },
    {
      category: "Con Carne",
      items: [
        { name: "Naruto", price: "10.50€", description: "Queso amarillo, carne molida, pico de gallo, jalapeños, huevo frito, mojo de aguacate" },
        { name: "Daphne", price: "10.90€", description: "Queso, bacon, jalapeños, carne molida, cebolla crujiente, salsa cheddar" },
        { name: "Robin Hood", price: "9.10€", description: "Queso amarillo, carne mechada, aguacate" },
        { name: "Obelix", price: "10.50€", description: "Queso, huevo frito, cebolla, carne molida, salchichas, salsa de tomate, bechamel" },
        { name: "Lily", price: "10.90€", description: "Queso amarillo, carne molida, cebolla, bacon, queso de cabra, nata" },
      ]
    },
    {
      category: "Con Bacon",
      items: [
        { name: "Sheldon Cooper", price: "10.90€", description: "Queso semicurado, bacon, aguacate, tomate natural, nata" },
        { name: "Flash", price: "10.70€", description: "Queso, bacon, champiñones, cebolla, huevo frito, nata, jarabe de arce" },
        { name: "Ainhoa", price: "10.90€", description: "Queso amarillo, bacon, queso de cabra, cherry, rucula, nueces, manzana, jarabe de arce" },
      ]
    }
  ],
  nachos: [
    { name: "Nachos a 'La Casa del Crepe'", price: "13.50€", description: "Carne mechada, bacon, queso amarillo, pico de gallo, jalapeños, salsa de aguacate, salsa chédar" },
    { name: "Nachos simples", price: "10.50€", description: "Queso amarillo, pico de gallo, salsa de aguacate, salsa chédar, salsa yogurt" },
  ],
  crepesDulces: [
    { name: "Chocolate", price: "4.00€" },
    { name: "Chocolate con frutos secos", price: "5.00€", description: "Chocolate, almendras o nueces o coco" },
    { name: "Chocolate con nata", price: "5.00€", description: "Chocolate, nata" },
    { name: "Chocolate con helado", price: "5.00€", description: "Chocolate, helado" },
    { name: "Crema de Pistacho", price: "6.10€" },
    { name: "Nutella", price: "4.90€" },
    { name: "Nutella con frutos secos", price: "5.90€", description: "Nutella, almendras o nueces o coco" },
    { name: "Nutella con plátano", price: "6.00€", description: "Nutella, plátano" },
    { name: "Dulce de leche", price: "4.60€" },
    { name: "Dulce de leche con frutos secos", price: "5.80€", description: "Dulce de leche, almendras o nueces o coco" },
    { name: "Mermelada", price: "3.90€" },
    { name: "Mermelada con frutos secos", price: "4.90€", description: "Mermelada, almendras o nueces o coco" },
    { name: "Jarabe de arce", price: "4.80€" },
    { name: "Azúcar", price: "3.40€" },
    { name: "Azúcar glass", price: "3.40€" },
    { name: "Azúcar y limón", price: "4.50€", description: "Azúcar, limón" },
    { name: "Azúcar y canela", price: "4.50€", description: "Azúcar, canela" },
    { name: "Miel", price: "4.30€" },
    { name: "Miel de palma", price: "4.80€" },
  ],
  crepesDulcesEspeciales: [
    { name: "Osito amoroso", price: "7.90€", description: "Helado de vainilla, nata, M&Ms, chocolate, leche condensada" },
    { name: "Sofia", price: "7.90€", description: "Helado de coco, nata, almendras crocantes, chocolate blanco, chocolate" },
    { name: "Cheesecrepe", price: "6.90€", description: "Mascarpone, mermelada de fresa, helado de vainilla" },
    { name: "Heidi", price: "6.90€", description: "Chips ahoy, helado de nata, chocolate, leche condensada" },
    { name: "Oreo", price: "6.90€", description: "Oreo, helado de vainilla, chocolate, azúcar glass" },
    { name: "Kínder", price: "6.90€", description: "Kínder bueno, helado de nata, chocolate, azúcar glass" },
    { name: "Kit-Kat", price: "6.90€", description: "Kit-kat, helado de chocolate, dulce de leche, azúcar glass" },
    { name: "Filipinos", price: "6.90€", description: "Filipinos, helado de chocolate, chocolate blanco, azúcar glass" },
    { name: "Gabriel", price: "7.90€", description: "Helado de chocolate, chocolate blanco, fresas, almendras crocantes" },
    { name: "Balu", price: "7.90€", description: "Nutella, plátano, helado de vainilla, nata" },
    { name: "Teletubies", price: "7.90€", description: "Platano, nata, fresas, dulce de leche, chocolate" },
    { name: "Maya", price: "6.90€", description: "Manzana, helado de vainilla, miel, canela" },
    { name: "Bambi", price: "6.90€", description: "Mascarpone, nutella, coco" },
  ],
  brunch: [
    { name: "Brunch internacional (1 pers)", price: "12.90€", description: "Salmon, mozzarella, queso, almogrote, queso semicurado, mini ensalada, mini crepe, pan, mantequilla, dulce de leche, mermelada, nutella, zumo de naranja, yogur con fruta" },
    { name: "Brunch internacional (2 pers)", price: "23.90€", description: "Salmon, mozzarella, queso, almogrote, queso semicurado, mini ensalada, mini crepe, pan, mantequilla, dulce de leche, mermelada, nutella, zumo de naranja, yogur con fruta" },
    { name: "Brunch Londres (1 pers)", price: "12.50€", description: "Bacon, mozzarella, queso, huevo frito, jamon serrano, mini ensalada, mini crepe, pan, mantequilla, dulce de leche, mermelada, nutella, zumo de naranja" },
    { name: "Brunch Londres (2 pers)", price: "23.50€", description: "Bacon, mozzarella, queso, huevo frito, jamon serrano, mini ensalada, mini crepe, pan, mantequilla, dulce de leche, mermelada, nutella, zumo de naranja" },
    { name: "Brunch parís", price: "10.90€", description: "Yogur con fruta, mini crepe salado, mini crepe dulce, zumo de naranja" },
    { name: "English breakfast", price: "9.10€", description: "Bacon, alubias, tomate, champiñones, huevo frito, salchicha, pan, mantequilla, zumo de naranja" },
    { name: "Brunch Barcelona", price: "5.20€", description: "Tostada, jamon serrano, tumaca, zumo de naranja" },
    { name: "Desayuno clásico", price: "4.00€", description: "Tostada, mantequilla, mermelada, zumo de naranja" },
    { name: "Yogurt con fruta y muesly", price: "4.80€" },
  ],
  tostadas: [
    { name: "Rulo de cabra", price: "7.80€", description: "Bacon, rúcula, tomate cherry, nueces, miel palma" },
    { name: "Serrano", price: "7.80€", description: "Tumaca, parmesano, rúcula, aceite, orégano" },
    { name: "Atún", price: "7.10€", description: "Guacamole, pico de gallo, huevo duro, orégano" },
    { name: "Salmón", price: "8.50€", description: "Guacamole, pepino, rúcula, feta" },
    { name: "Feta", price: "7.10€", description: "Rúcula, pico de gallo, pepino, pimienta, salsa de yogur, orégano" },
  ],
  bebidas: {
    cafeTe: [
      { name: "Espresso", price: "1.10€" },
      { name: "Americano", price: "1.50€" },
      { name: "Cortado", price: "1.20€" },
      { name: "Cortado leche leche", price: "1.30€" },
      { name: "Bombón", price: "1.20€" },
      { name: "Barraquito con licor", price: "2.80€" },
      { name: "Café con leche", price: "1.70€" },
      { name: "Cappuccino", price: "1.80€" },
      { name: "Latte macciatto", price: "2.80€" },
      { name: "Café Frappé", price: "3.50€" },
      { name: "Chocolate caliente", price: "2.80€" },
      { name: "Nesquick", price: "1.80€" },
      { name: "Te", price: "2.10€" },
      { name: "Leche de avena", price: "+0.2€" },
    ],
    zumos: [
      { name: "Zumo de naranja", price: "3.50€" },
      { name: "Zumo del día / batido", price: "3.80€" },
      { name: "Zumo de botella", price: "2.00€" },
    ],
    refrescos: [
      { name: "Agua 0.5 litros", price: "1.50€" },
      { name: "Agua 1.5 litros", price: "2.10€" },
      { name: "Agua con gas 0.5 litros", price: "2.00€" },
      { name: "Coca cola / zero", price: "2.30€" },
      { name: "Fanta limón / Sprite", price: "2.30€" },
      { name: "Fanta naranja / Nestea / Aquarius", price: "2.30€" },
      { name: "Appletizer", price: "2.50€" },
      { name: "Tónica", price: "2.30€" },
    ],
    cerveza: [
      { name: "Caña", price: "1.80€" },
      { name: "Jarra", price: "2.80€" },
      { name: "Dorada Pilsen", price: "1.90€" },
      { name: "Dorada especial tostada", price: "2.10€" },
      { name: "Dorada especial esencia negra", price: "2.20€" },
      { name: "Dorada sin alcohol", price: "2.10€" },
      { name: "Sin alcohol con limón", price: "2.10€" },
      { name: "Coronita", price: "2.80€" },
      { name: "Estrella Galicia mini", price: "1.50€" },
      { name: "1906", price: "2.80€" },
      { name: "Heineken", price: "1.80€" },
      { name: "Sidra", price: "3.50€" },
    ],
    vinosCocktails: [
      { name: "Cava", price: "2.90€" },
      { name: "Copa de vino (blanco/tinto/rosa/afrutado)", price: "3.50€" },
      { name: "Copa albariño", price: "4.00€" },
      { name: "Copa de tinto de verano", price: "4.50€" },
      { name: "Aperol Spritz", price: "5.00€" },
      { name: "Copa de Sangria", price: "5.00€" },
      { name: "Copa sangria blanca", price: "5.00€" },
      { name: "Mojito", price: "6.00€" },
      { name: "Caipiriña", price: "6.00€" },
      { name: "Piña colada", price: "6.00€" },
    ]
  }
};

export const CONTACT_INFO = {
  phone: "+34 638 62 04 79",
  whatsapp: "https://wa.me/34638620479",
  address: "Paseo Marítimo, El Médano, Tenerife",
  instagram: "https://www.instagram.com/lacasadelcrepeelmedano/",
  facebook: "https://www.facebook.com/lacasadelcrepeelmedano/",
  location: "https://maps.app.goo.gl/gintxo8KE8uobcqy6"
};

export const SOUNDS = {
  frying: "https://assets.mixkit.co/sfx/preview/mixkit-frying-food-in-a-pan-2516.mp3",
  kitchen: "https://assets.mixkit.co/sfx/preview/mixkit-kitchen-clatter-and-voices-2517.mp3",
  bell: "https://assets.mixkit.co/sfx/preview/mixkit-service-bell-ring-982.mp3",
  pop: "https://assets.mixkit.co/sfx/preview/mixkit-pop-click-sound-952.mp3"
};
