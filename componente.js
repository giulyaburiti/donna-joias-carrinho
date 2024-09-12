class Componente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch('https://localhost:3000/prod')
            .then(response => response.json())
            .then(data => this.renderProducts(data.prod))
            .catch(error => console.error('Erro ao buscar os produtos:', error));
    }

    renderProducts(products) {
        const div = document.createElement("div");
        div.className = "card-deck";

        let productHTML = '<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">';

        products.forEach(product => {
            productHTML += `
                <div class="col">
                    <div class="card mb-3 mt-3">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.author}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>R$${product.price.toFixed(2)}</strong></p>
                        </div>
                        <div class="card-body">
                            <a href="sacola.html?id=${product.id}" class="btn btn-primary">Detalhes</a>
                        </div>
                    </div>
                </div>
            `;
        });

        productHTML += '</div>';
        div.innerHTML = productHTML;

        this.appendChild(div);
    }
}

customElements.define("componente-novo", Componente);