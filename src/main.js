// require("babel-runtime/regenerator");
require("./main.css");
require("./index.html");

var a = async (args) => {

    await console.log("Hello from the future");
    console.log("Done")
}
a();
