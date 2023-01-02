const fs = require('fs');

const createFileUsingAppend = function (fileName, dataToBeWrite) {
    new Promise((resolve, reject) => {
        fs.appendFile(__dirname + '/' + fileName, dataToBeWrite, (err) => {
            if (err) reject(err)
            else resolve("File created successfully.")
        });
    });
}

const run = async () => {
    await createFileUsingAppend('abc3.txt', 'Sample Data');
}

run();
