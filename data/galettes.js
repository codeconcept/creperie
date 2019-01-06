galettes = [
  {
    id: 1,
    name: 'complète',
    safeName: 'complete',
    ingredients: 'oeuf, jambon, fromage',
    price: 4.50,
    currency: 'euros'
  },
  {
    id: 2,
    name: 'complète (andouille)',
    safeName: 'complete-andouille',
    ingredients: 'jambon, tomate, andouille, poitrine fumée, salade',
    price: 4.90,
    currency: 'euros'
  },
  {
    id: 3,
    name: 'argoad',
    safeName: 'argoad',
    ingredients: 'chèvre, poireaux, crème, tomates cerise,  jambon serrano, salade verte',
    price: 4.50,
    currency: 'euros'
  },
  {
    id: 4,
    name: 'peskedine',
    safeName: 'peskedine',
    ingredients: 'salade croquante, saumon fumé, fondue de poireaux frais, sauce crème aux herbes fraiches',
    price: 7.50,
    currency: 'euros'
  },
  {
    id: 5,
    name: 'forestière',
    safeName: 'forestière',
    ingredients: 'emmental, jambon, œuf, champignons persillés, crème fraîche',
    price: 6.50,
    currency: 'euros'
  }
];

module.exports = { nb: galettes.length, data: { name: 'galettes', items: galettes }};