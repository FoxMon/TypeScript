function fetchItems(test: string): Promise<string[]> {
    const items: string[] = ["a", "b", "c"]
    return new Promise<string[]>(function (resolve, reject) {
        if (test == "Error") {
            reject(new Error("Erorr!"))
        } else {
            resolve(items)
        }
    })
}

const promise = fetchItems("No")
promise
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))
