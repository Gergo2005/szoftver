export default function kaveKepHozzaadas(img) {
    const kep = document.createElement("img");
    kep.src = `${img}`;
    kep.classList.add("img-fluid", "rounded", "mb-3");
    
    return kep;
}
