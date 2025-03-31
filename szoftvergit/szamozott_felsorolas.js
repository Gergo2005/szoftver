export default function kaveKinalatSorszam() {
    const ol = document.createElement("ol");
    let kavefajtak = [
        "🎂Tiramisu",
        "🎂Aranygaluska",
        "🎂Krémes",
        "🎂Csokiskeksz",
        "🎂Túró torta"
    ];
    kavefajtak.forEach(kave => {
        const li = document.createElement("li");
        li.innerText = kave;
        ol.append(li);
    });

    return ol;
}
