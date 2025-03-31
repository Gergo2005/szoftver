export default function kaveKinalatTablazat() {
    let kavek = [
        ["Kávé", "Tej", "Méret", "Ár"],
        ["Latte Macchiato", "Tej", "Kicsi", "$3"],
        ["Espresso", "Nincs", "Kicsi", "$2"],
        ["Cappuccino", "Tej", "Közepes", "$4"]
    ];

    let tabla = document.createElement("table");

    let thead = document.createElement("thead");
    let fejlecSor = document.createElement("tr");
    kavek[0].forEach(element => {
        let oszlop = document.createElement("th");
        oszlop.textContent = element;
        fejlecSor.appendChild(oszlop);
    });
    thead.appendChild(fejlecSor);
    tabla.appendChild(thead);

    let tbody = document.createElement("tbody");
    for (let i = 1; i < kavek.length; i++) {
        let sor = document.createElement("tr");
        kavek[i].forEach(element => {
            let oszlop = document.createElement("td");
            oszlop.textContent = element;
            sor.appendChild(oszlop);
        });
        tbody.appendChild(sor);
    }
    tabla.appendChild(tbody);

    tabla.classList.add("table", "table-dark", "table-striped");

    return tabla;
}
