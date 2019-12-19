"use strict";

const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, './USCities.json')
let pathToWriteFile =  path.join(__dirname, './USCities-table.json')

const fileBuffer = fs.readFileSync(pathToFile)
const file = JSON.parse(fileBuffer);

let fileTable = [["zip", "lat", "long", "city", "state", "county"]];

for (let i = 0; i < file.length; i++) {
   fileTable[i+1] = [];
   fileTable[i+1][0] = file[i].zip_code;
   fileTable[i+1][1] = file[i].latitude;
   fileTable[i+1][2] = file[i].longitude;
   fileTable[i+1][3] = file[i].city;
   fileTable[i+1][4] = file[i].state;
   fileTable[i+1][5] = file[i].county;

}


// for (let i = 0; i < file.length; i++) {
//    file[i].la = file[i].latitude;
//    delete file[i].latitude;

//    file[i].lo = file[i].longitude;
//    delete file[i].longitude;

//    file[i].ci = file[i].city;
//    delete file[i].city;

//    file[i].co = file[i].county;
//    delete file[i].county;

//    file[i].st = file[i].state;
//    delete file[i].state;

//    file[i].zi = file[i].zip_code;
//    delete file[i].zip_code;

// }

let previousSliceEnd = 1;
for (let j = 0; j < 10; j++) {
   let zipCodeDivider = (j === 0) ? "00000" : j * 10000;
   pathToWriteFile = path.join(__dirname, './USCities-divided/USCities-' + zipCodeDivider + '.json');

   for (let i = 1; i < fileTable.length; i++) {
      if (j == 9) {
         console.log(fileTable[previousSliceEnd][0], ' to ',fileTable[fileTable.length-1][0]);
         fs.writeFileSync(pathToWriteFile,
            JSON.stringify( fileTable.slice(previousSliceEnd) ) );
         break;
      }
      if (fileTable[i][0] >= ((j+1) * 10000)) {
         console.log(fileTable[previousSliceEnd][0], ' to ',fileTable[i-1][0]);
         fs.writeFileSync(pathToWriteFile,
            JSON.stringify( fileTable.slice(previousSliceEnd,i) ) );
         previousSliceEnd = i;
         break;
      }
   }
}

// fs.writeFileSync(pathToWriteFile,JSON.stringify(fileTable));

console.log(fileTable.length);