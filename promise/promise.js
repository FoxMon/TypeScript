function fetchItems(test) {
    var items = ["a", "b", "c"];
    return new Promise(function (resolve, reject) {
        if (test == "Error") {
            reject(new Error("Erorr!"));
        }
        else {
            resolve(items);
        }
    });
}
var promise = fetchItems("No");
promise
    .then(function (data) {
    console.log(data);
})["catch"](function (error) { return console.log(error); });
