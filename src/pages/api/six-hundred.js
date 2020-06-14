const colorCombinations = require('./color-combinations.json');

// Not required but here incase I ever want to run it again.
// const buildColors = () => {
//   const colors = {};
//   pantoneColors.names.forEach((name, i) => {
//     colors[name] = pantoneColors.values[i];
//   });

//   let result = colorable(colors, {
//     compact: true,
//     threshold: 4.5,
//     uniq: true,
//   });
//   result = result.filter(color => color.combinations.length);

//   let count = 0;
//   const numberOfColors = result.length;
//   result.forEach((color, i) => {
//     count += color.combinations.length;
//     result[i] = {
//       name: changeCase.titleCase(color.name),
//       hex: color.hex,
//       combinations: color.combinations.map(combo => ({
//         name: changeCase.titleCase(combo.name),
//         hex: combo.hex,
//       })),
//     };
//   });

//   count += numberOfColors;
//   result.count = count;
//   const build = {
//     colors: result,
//     count,
//   };
//   fs.writeFile('./color-combinations.json', JSON.stringify(build), err => console.log(err));
// };

export default (req, res) => {
  function randomNumber(max, min = 0) {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxi - mini)) + mini;
  }

  function pantoneTheme() {
    const index = randomNumber(colorCombinations.colors.length - 1);
    const base = colorCombinations.colors[index];
    return {
      index: `${base.name} - ${base.hex} is ${index} of ${colorCombinations.colors.length}, with ${base.combinations.length} combination${base.combinations.length > 1 ? 's' : ''}.`,
      colour: base,
      totalCombinations: colorCombinations.count,
      theme: {
        primary: base.hex,
        secondary: base.combinations[randomNumber(base.combinations.length - 1)].hex,
        tertiary: base.combinations[randomNumber(base.combinations.length - 1)].hex,
      },
    };
  }
  res.end(JSON.stringify(pantoneTheme()));
};
