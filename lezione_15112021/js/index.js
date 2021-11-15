import { API } from "./utils.js";
import { list } from"./list.js";
import { add } from"./add.js";

// const list = (data) => {                            // list riceverà un array di dati
//     const elements = data
//         .map(item => `<li>${item.title} - ${item.year}</li>`)
//         .join('');

//     const container = document.querySelector("#container");
//     render(
//         container,
//         `
//         <p>Elenco schede film</p>
//         <ul>${elements}</ul>
//     `
//     );
// };

document.addEventListener("DOMContentLoaded", () => {
    fetch(API)
        .then((response) => response.json())
        .then((data) => list(data));

    const btn = document.querySelector("#add");
    btn.addEventListener("click", add);
});