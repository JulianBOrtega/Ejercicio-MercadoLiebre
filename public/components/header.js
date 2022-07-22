class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="header__top">
                <a href="/"><img src="/img/logo-mercado-liebre.svg" alt=""></a>
                <form action="http://localhost:3030/img/img-important.jpg">
                    <input type="text" placeholder="Buscar..." name="searchInput" id="searchBar">
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <p><a href="https://i.imgur.com/SEzJXfM.png"><i class="fa-solid fa-hand-holding-dollar"></i> Comprá en cuotas y sin tarjeta de crédito</a></p>
            </div>

            <nav class="header__menu">
                <ul>
                    <li><a href="https://youtu.be/dQw4w9WgXcQ">Ofertas</a></li>
                    <li><a href="https://youtu.be/dQw4w9WgXcQ">Tiendas oficiales</a></li>
                    <li><a href="https://youtu.be/dQw4w9WgXcQ">Vender</a></li>
                    <li><a href="https://youtu.be/dQw4w9WgXcQ">Ayuda</a></li>
                </ul>
                <ul>
                    <li><a href="/register">Creá tu cuenta <i class="fa-solid fa-user-plus"></i></a></li>
                    <li><a href="/login">Ingresá <i class="fa-solid fa-arrow-right-to-bracket"></i></a></li>
                    <li><a href="https://youtu.be/dQw4w9WgXcQ">Mis Compras <i class="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </nav>
            <div id="burger"><i class="fa-solid fa-bars"></i></div>
        </header>
      `;
    }
}

customElements.define('header-component', Header);