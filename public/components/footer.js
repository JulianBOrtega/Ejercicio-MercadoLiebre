class Footer extends HTMLElement 
{
    constructor() 
    {
      super();
    }
  
    connectedCallback() 
    {
      this.innerHTML = `
        <footer class="footer">
            <div>
                <i class="fa-solid fa-credit-card"></i>
                <h4>Pagá con tarjeta o en efectivo</h4>
                <p>Con Mercado Liebre Cash, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!</p>
            </div>
            <div>
                <i class="fa-solid fa-gift"></i>
                <h4>Envío gratis desde $ 2.500</h4>
                <p>Solo por estar registrad@ en Mercado Liebre tenés envíos gratis en miles de
                productos. Es un beneficio de Mercado Puntos.</p>
            </div>
            <div>
                <i class="fa-solid fa-user-shield"></i>
                <h4>Seguridad, de principio a fin</h4>
                <p>¿No te gusta? ¡Devolvelo! En Mercado Liebre, no hay nada que no puedas hacer,
                porque estás siempre protegid@.</p>
            </div>
            <p>Copyright © 1999-2020 MercadoLiebre S.R.L.</p>
        
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);