const fs = require('fs');
const isAppend = true;

const createFileUsingAppend = function (fileName, dataToBeWrite) {
    new Promise((resolve, reject) => {
        fs.appendFile(__dirname + '/' + fileName, dataToBeWrite, (err) => {
            if (err) reject(err)
            else resolve("File created successfully.")
        });
    });
}
const createFileUsingFileWrite = function (fileName, dataToBeWrite) {
    new Promise((resolve, reject) => {
        fs.writeFile(__dirname + '/' + fileName, dataToBeWrite, (err) => {
            if (err) reject(err)
            else resolve("File created successfully.")
        });
    });
}

const run = async () => {
    !!isAppend ? await createFileUsingAppend('abc3.txt', 'Sample Data') : 
        await createFileUsingFileWrite('abc3.txt', 'Sample Data from write file');
}

run()
