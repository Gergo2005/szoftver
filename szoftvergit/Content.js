const kavezoUrlap = () => {
    const urlap = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand">Geri Kávézója</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

    <div class="container mt-5 pt-5">
        <div class="row">
            <div class="col-md-6">
                <h2 class="highlight">Legnépszerűbb Kávéfajták</h2>
                <div id="felsorolas"></div>
            </div>
            <div class="col-md-6">
                <h2 class="highlight">A top 5 legtöbbet rendelt sütemény</h2>
                <div id="sorszam"></div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <h2 class="highlight">Ártábla</h2>
                <div id="tablazat"></div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <h2 class="highlight">Galéria</h2>
                <div class="custom-card">
                    <div id="kep"></div>
                    <p>Árúkészletünk változatos és színes😊 </p>
                </div>
            </div>
        </div>
    </div>
    `;
    return urlap;
};

export default kavezoUrlap;
