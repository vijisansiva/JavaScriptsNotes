function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Students!");
        }, 5000);
    });
}

async function display() {
    console.log("Start");

    let result = getData();

    console.log(result);
    console.log("End");
}

display();