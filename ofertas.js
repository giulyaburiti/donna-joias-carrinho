class Oferta extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const div = document.createElement("div");
        div.className = "card-deck";
        div.innerHTML = `
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-alianca.jfif" class="card-img-top" alt="Anel Aliança">
                        <div class="card-body">
                            <h5 class="card-title">Anel Aliança</h5>
                            <p class="card-text">Uma elegante aliança, símbolo de união e compromisso.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 150.00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-coracao-minimalista.png" class="card-img-top" alt="Anel Coraçao Minimalista">
                        <div class="card-body">
                            <h5 class="card-title">Anel Coraçao Minimalista</h5>
                            <p class="card-text">Um delicado anel com um coração sutil.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 200,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-gota-ponto-de-luz.png" class="card-img-top" alt="Anel Gota Com Ponto de Luz">
                        <div class="card-body">
                            <h5 class="card-title">Anel Gota Com Ponto de Luz</h5>
                            <p class="card-text">Elegante anel com um ponto de luz em forma de gota.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 70,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-liso-torcido.jpeg" class="card-img-top" alt="Anel Liso Torcido">
                        <div class="card-body">
                            <h5 class="card-title">Anel Liso Torcido</h5>
                            <p class="card-text">Um anel simples com um design torcido.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 100,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-meia-alianca-diamantado.jpg" class="card-img-top" alt="Anel Meia Aliança Diamantado">
                        <div class="card-body">
                            <h5 class="card-title">Anel Meia Aliança Diamantado</h5>
                            <p class="card-text">Anel refinado com acabamento diamantado.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 130,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-meia-alianca.png" class="card-img-top" alt="Anel Meia Aliança">
                        <div class="card-body">
                            <h5 class="card-title">Anel Meia Aliança</h5>
                            <p class="card-text">Anel clássico com meio círculo de pedras.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 150,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-trancado.png" class="card-img-top" alt="Anel Trançado">
                        <div class="card-body">
                            <h5 class="card-title">Anel Trançado</h5>
                            <p class="card-text">Anel com design trançado.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 80,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/aneis/anel-zirconia-gota.png" class="card-img-top" alt="Anel Zirconia Gota">
                        <div class="card-body">
                            <h5 class="card-title">Anel Zirconia Gota</h5>
                            <p class="card-text">Um anel deslumbrante com zircônia em forma de gota.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 50,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-argola-grande.jpg" class="card-img-top" alt="Brinco Argola 1">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Argola 1</h5>
                            <p class="card-text">Argolas grandes e impactantes.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 45,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-argola.jpg" class="card-img-top" alt="Brinco Argola 2">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Argola 2</h5>
                            <p class="card-text">Brincos de argola clássicos.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 40,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-cristais.jpg" class="card-img-top" alt="Brinco Cristais">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Cristais</h5>
                            <p class="card-text">Brincos delicados com cristais brilhantes.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 160,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-cristal-diamantado.jpg" class="card-img-top" alt="Brinco Cristal Diamantado">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Cristal Diamantado</h5>
                            <p class="card-text">Brincos com cristais de acabamento diamantado.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 140,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-ponto-de-luz-redondo.png" class="card-img-top" alt="Brinco Ponto de Luz Redondo">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Ponto de Luz Redondo</h5>
                            <p class="card-text">Brincos simples com pontos de luz redondos.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 110,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-prata-leve-pendurado.jpg" class="card-img-top" alt="Brinco Prata Leve 1">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Prata Leve</h5>
                            <p class="card-text">Brincos prateados leves e pendurados.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 80,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/brincos/brinco-prata-arredondado.jpg" alt="Brinco Prata Arredondado">
                        <div class="card-body">
                            <h5 class="card-title">Brinco Prata Arredondado</h5>
                            <p class="card-text">Brincos em prata com design arredondado.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 90,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/Colar-arvore-da-vida.jpg" alt="Colar Árvore da Vida">
                        <div class="card-body">
                            <h5 class="card-title">Colar Árvore da Vida</h5>
                            <p class="card-text">Colar simbólico com pingente de Árvore da Vida.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 65,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/colar-ponto-luz-redondo.png" alt="Colar Ponto Luz Redondo">
                        <div class="card-body">
                            <h5 class="card-title">Colar Ponto Luz Redondo</h5>
                            <p class="card-text">Colar com um delicado ponto de luz redondo.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 100,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/colar-prata-estrela.jpg" alt="Colar Prata Estrela">
                        <div class="card-body">
                            <h5 class="card-title">Colar Prata Estrela</h5>
                            <p class="card-text">Colar em prata com um delicado pingente de estrela.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 60,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/colar-prata-onda.png" alt="Colar Prata Onda">
                        <div class="card-body">
                            <h5 class="card-title">Colar Prata Onda</h5>
                            <p class="card-text">Colar com pingente em forma de onda.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 50,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/colares/corrente.jpg" alt="Colar Corrente">
                        <div class="card-body">
                            <h5 class="card-title">Colar Corrente</h5>
                            <p class="card-text">Corrente prateada simples e elegante.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 140,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-bolinhas.png" alt="Pulseira de Bolinhas">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira de Bolinhas</h5>
                            <p class="card-text">Pulseira delicada com detalhes em bolinhas.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 100,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-diamantado.png" alt="Pulseira Diamantado">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira Diamantado</h5>
                            <p class="card-text">Pulseira com acabamento diamantado.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 150,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-elo-coracao.png" alt="Pulseira Elo Coração">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira Elo Coração</h5>
                            <p class="card-text">Pulseira charmosa com elos em forma de coração.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 90,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="images/pulseiras/pulseira-fina.jpeg" alt="Pulseira Fina">
                        <div class="card-body">
                            <h5 class="card-title">Pulseira Fina</h5>
                            <p class="card-text">Pulseira prata fina e discreta.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">R$ 100,00</li>
                        </ul>
                        <div class="card-body">
                            <a href="sacola.html" class="Detalhes">Detalhes</a>
                        </div>
                    </div>
                </div>
            </div>
         `;
        this.appendChild(div);
    }
}

customElements.define("oferta-nova", Oferta);