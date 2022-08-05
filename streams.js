const fs = require('fs');


const readStream = fs.createReadStream('./docs/blog.txt', {encoding : 'utf-8'})
const writeStream =fs.createWriteStream("./docs/blog4.txt");


// readStream.on('data', (chunk) =>{
 
//     console.log("===NEW CHUNK===")
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK \n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream) // same as the commented code above
