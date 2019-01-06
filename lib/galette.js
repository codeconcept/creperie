const galettes = require('../data/galettes');

const nbOfGalettes = galettes.nb;
const allGalettes = galettes.data.items;

const getRandomGalette = () => {
  const randomNumber = Math.floor(Math.random() * nbOfGalettes);
  return allGalettes[randomNumber];
};

const getGaletteByName = (safeName) => {
  const galette = allGalettes.find(g => g.safeName === safeName);
  return galette;
};

const getSpecificNumberOfGalettes = (numberOfGalettes) => {
  // numberOfGalettes too big, simply return all existing galettes
  if (numberOfGalettes > nbOfGalettes) {
    return { nb: nbOfGalettes, galettes: allGalettes };
  }
  const galettesSelected = allGalettes.slice(0, numberOfGalettes);
  return { nb: galettesSelected.length, galettes: galettesSelected };
};

module.exports = {
  getRandomGalette,
  getGaletteByName,
  getSpecificNumberOfGalettes
}