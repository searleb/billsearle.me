const fs = require('fs');

fs
  .readdirSync(__dirname, { withFileTypes: true })
  .forEach(c => {
    if (c.isDirectory()) {
      // fs.renameSync(`${__dirname}/${c.name}/index.js`, `${__dirname}/${c.name}/${c.name}.js`);

      const content = `export { default } from './${c.name}';`;
      fs.writeFile(`${__dirname}/${c.name}/index.js`, content, err => {
        if (err) throw err;
        console.log('saved!');
      });
    }
  });
