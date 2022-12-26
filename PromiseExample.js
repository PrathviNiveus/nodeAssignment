let messagePromise = new Promise(function (resolve, reject) {
    if (true)
        resolve('Promise is resolved successfully.');
    else
        reject('Promise is rejected.');
});

messagePromise.then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
})