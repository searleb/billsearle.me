// /* eslint-disable prefer-destructuring */
// const { performance } = require('perf_hooks');
// const { createCanvas } = require('canvas');
// /**
//  * To not impact browser performance at all
//  * I am using the node implementation of canvas,
//  * doing all the rendering server side and
//  * returning a base64 string to render within
//  * an <img/> element
//  */
// function drawCanvas(colors) {
//   const width = 256;
//   const height = 128;
//   const canvas = createCanvas(width, height);
//   const ctx = canvas.getContext('2d');

//   const imgData = ctx.createImageData(width, height);
//   for (let i = 0; i < imgData.data.length; i += 4) {
//     const cPos = i / 4;
//     imgData.data[i] = colors[cPos][0];
//     imgData.data[i + 1] = colors[cPos][1];
//     imgData.data[i + 2] = colors[cPos][2];
//     imgData.data[i + 3] = colors[cPos][3];
//   }
//   ctx.putImageData(imgData, 0, 0);

//   return canvas.toDataURL();
// }

// export default (req, res) => {
//   const { query } = req;
//   const palette = [];
//   const steps = 32;
//   const increment = 8;
//   const params = new Array(steps + 1).fill().map((_, i) => i * increment);
//   // remove 0 column color so the resulting loop returns 32,768 colors
//   params.shift();

//   /**
//    * This was my first attempt at building out the color array I would use to build the image.
//    * Nesting loops is usually something to avoid so I wanted to see how well it performed.
//    * Using the performance module it takes usually ~4ms.
//    * Since it's still fast and is easy to read and reason about I decided to stick with it.
//    */
//   const startP = performance.now();
//   const alpha = query.alpha || 255;
//   params.forEach(r => {
//     params.forEach(g => {
//       params.forEach(b => {
//         /**
//          * One thing to note, the top value here is 256 which is above the 255 limit
//          * for an rgb color value. Anything over 255 is treated as 255 when rendered
//          * in canvas or the browser, so while this works there could be a case to check
//          * and clamp >=256 down to 255.
//          *
//          * Adding alpha value here to match up with canvas pixel data: (r,g,b,a).
//          */
//         palette.push([r, g, b, alpha]);
//       });
//     });
//   });
//   const endP = performance.now();
//   console.log('loop time:', `${endP - startP}ms`);

//   /**
//    * Sort by total value of all three color components
//    * Results in a dark to light fade effect while ignoring
//    * the color itself.
//    */
//   if (query.sort === '1') {
//     const startS = performance.now();
//     const reducer = (a, b) => a + b;
//     palette.sort((a, b) => a.reduce(reducer) - b.reduce(reducer));
//     const endS = performance.now();
//     console.log('sort time:', `${endS - startS}ms`);
//   }

//   res.end(JSON.stringify(drawCanvas(palette)));
// };
