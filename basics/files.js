const fs = require('fs'); // fs stands for files system

// reading files
// fs.readFile('./blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// console.log('last line');

// writing files
// fs.writeFile('./blog1.txt', 'hello, world', () => {
//   console.log('file was written');
// });
// fs.writeFile('./blog2.txt', 'hello, world again', () => {
//   console.log('file was written');
// });

// directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files
if (fs.existsSync('./deleteme.txt')) {
  fs.unlink('./deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
