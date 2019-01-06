crepes = [
  {
    id: 1,
    name: 'beurre sucre',
    safeName: 'beurre-sucre',
    ingredients: 'beurre, sucre',
    price: 2.50,
    currency: 'euros'
  },
  {
    id: 2,
    name: 'caramel (maison)',
    safeName: 'caramel-maison',
    ingredients: 'caramel maison',
    price: 4.4,
    currency: 'euros'
  },
  {
    id: 3,
    name: 'plougastel',
    safeName: 'plougastel',
    ingredients: 'confiture de fraises, liqueur de fraise de Plougastel',
    price: 6,
    currency: 'euros'
  },
  {
    id: 4,
    name: 'pommeraie',
    safeName: 'pommeraie',
    ingredients: 'pommes confites, glace caramel au beurre salé, caramel, chantilly et amandes grillées',
    price: 8.20,
    currency: 'euros'
  },
  {
    id: 5,
    name: 'chocolat – amandes',
    safeName: 'chocolat–amandes',
    ingredients: 'chocolat, amandes',
    price: 4.60,
    currency: 'euros'
  },
];

module.exports = { nb: crepes.length, data: { name: 'galettes', items: crepes }};