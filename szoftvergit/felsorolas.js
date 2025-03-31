export default function kaveKinalat() {
    const ul = document.createElement("ul");
    let kavefajtak = [
        "☕ Latte Macchiato",
        "☕ Espresso",
        "☕ Americano",
        "☕ Cappuccino",
        "☕ Mocha",
    ];
    kavefajtak.forEach(kave => {
        const li = document.createElement("li");
        li.innerText = kave;
        ul.append(li);
    });

    return ul;
}
