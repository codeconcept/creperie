const crepes = require('../data/crepes');

const nbOfCrepes = crepes.nb;
const allCrepes = crepes.data.items;

const getRandomCrepe = () => {
  const randomNumber = Math.floor(Math.random() * nbOfCrepes);
  return allCrepes[randomNumber];
};

const getCrepeByName = (safeName) => {
  const crepe = allCrepes.find(g => g.safeName === safeName);
  return crepe;
};

const getSpecificNumberOfCrepes = (numberOfCrepes) => {
  // numberOfGalettes too big, simply return all existing galettes
  if (numberOfCrepes > nbOfCrepes) {
    return { nb: nbOfCrepes, crepes: allCrepes };
  }
  const crepesSelected = allCrepes.slice(0, numberOfCrepes);
  return { nb: crepesSelected.length, crepes: crepesSelected };
};

module.exports = {
  getRandomCrepe,
  getCrepeByName,
  getSpecificNumberOfCrepes
}