const name = "Freddy";
// typeof is being used improperly
typeof name === "string";

if (!("serviceWorker" in navigator)) {
  // you have an old browser :-(
}

const greeting = "hello";
// string interpolation is incorrect
console.log(`${greeting} ${name}!`);

[(1, 2, 3)].forEach(x => console.log(x));
