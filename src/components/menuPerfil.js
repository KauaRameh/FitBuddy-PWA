const menuHome = document.createElement('template');

menuHome.innerHTML = `
<style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600&display=swap');
    @import url("/src/css/styles.css");
</style>
  <nav class="container-fluid fixed-bottom mb-n2 pt-3 pb-2 border-top border-black" style="background-color: #FFFFFF;">

    <div class="row justify-content-around text-center">

        <div onclick="location.href='/index.html';" class="col-3">
            <div class="text-primary">
                <i class="fa-solid fa-house" style="font-size: 1.6rem; color: #8F8F8F;"></i>
                <p style="font-size: small; font-weight: 600; color: #8F8F8F;" >Home</p>
            </div>
        </div>
        
        <div onclick="location.href='/src/pages/treino/treino.html';"class="col-3">
            <div class="text-primary">
                <i class="fa-solid fa-dumbbell" style   ="font-size: 1.6rem; color: #8F8F8F;"></i>
                <p style="font-size: small; font-weight: 600; color: #8F8F8F;" >Treino</p>
            </div>
        </div>

        <div onclick="location.href='/src/pages/descobrir/descobrir.html';"class="col-3">
            <div class="text-primary">  
                <i class="fa-solid fa-compass" style="font-size: 1.6rem; color: #8F8F8F;"></i>
                <p style="font-size: small; font-weight: 600; color: #8F8F8F;" >Descobrir</p>
            </div>
        </div>

        <div onclick="location.href='/src/pages/perfil/perfil.html';" style="cursor: pointer;" class="col-3">
            <div class="text-primary">
                <i class="fa-solid fa-user" style="font-size: 1.6rem; color: #FF650F;"></i>
                <p style="font-size: small; font-weight: 600; color: #FF650F;" >Perfil</p>
            </div>
        </div>
          
    </div>
</nav>
  
`;

class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(menuHome.content);
  }
}

customElements.define('menu-component', Menu);