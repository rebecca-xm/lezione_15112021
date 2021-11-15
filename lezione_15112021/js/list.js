import { render } from "./utils.js";

const list = (data) => {                            // list riceverà un array di dati
    const elements = data
        .map(item => `<li>${item.title} - ${item.year}</li>`)
        .join('');

    const container = document.querySelector("#container");
    render(
        container,
        `
        <p>Elenco schede film</p>
        <ul>${elements}</ul>
    `
    );
};

export { list };