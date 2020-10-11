# creperie
Faker that gets one or more galettes from Brittany when you need fake data to create an app

## Install

```
$ npm install creperie
```

## Usage
Get random galette or random crepe
```js
const creperie = require('creperie');

console.log('creperie.crepe.getRandomCrepe()', creperie.crepe.getRandomCrepe());
console.log('creperie.galette.getRandomGalette()', creperie.galette.getRandomGalette());
```

Get crepe or galette by name
```js
const creperie = require('creperie');

console.log('creperie.crepe.getCrepeByName()', creperie.crepe.getCrepeByName('plougastel'));
console.log('creperie.galette.getGaletteByName()', creperie.galette.getGaletteByName('complete'));
```

Get specific number or crepes or galettes
```js
const creperie = require('creperie');

console.log('getSpecificNumberOfCrepes(2)', creperie.crepe.getSpecificNumberOfCrepes(2));
console.log('getSpecificNumberOfGalettes(2)', creperie.galette.getSpecificNumberOfGalettes(2));
```

Get all crepes or galettes when too many are required
```js
const creperie = require('creperie');

console.log('getSpecificNumberOfCrepes(999)', creperie.crepe.getSpecificNumberOfCrepes(999));
console.log('getSpecificNumberOfGalettes(999)', creperie.galette.getSpecificNumberOfGalettes(999));
```