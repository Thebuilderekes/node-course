// const fs = require("fs"); // this stands for file system and it is called when there is need to interact with files

// fs.readFile("docs/blog.txt", (err, data) => {
//   // this is asynchronous so it takes sopme time to work

//   if (err) {
//     console.log(err);
//   }
//   //   console.log(data.toString()) // used to convert the buffer message that is sent back
//   console.log(data.toString()); // would load before the fs.readFile
// });

// console.log(
//   "this loads first because read file is asynchroous ad will take some time"
// );

// // write file
// fs.writeFile("docs/blog1.txt", "hello new", () => {
//     //this will add the text "hello new" to the file or replace whater text in it
//     //if this is done to a file that does not exist, it will create the file and add it
//     console.log("try this");
//   });
  

  //make a folder
//   fs.mkdir("./assets", (err) => {
//     if(err){
//     console.log(err);

//     }
//     console.log("file created");
//   });
  
  //delete a file

//   if(fs.existsSync("./deleteme.txt")){
//     fs.unlink("./deleteme.txt", (err) =>{

//      if(err){
//         console.log(err);
//      }

//         console.log("file deleted");
//     })
// }

