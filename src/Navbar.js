import Icone from "./Icone";
import Imagen from "./Imagen";
const icones = ["paper-plane-outline","compass-outline", "heart-outline", "person-outline"]


export default function Navbar() {
    
    return (
    <div class="navbar">
        <div class="container">
          <div class="logo">
            <Icone nomeIcone="logo-instagram" />
            <div class="separador"></div>
            <Imagen urlImagen="assets/img/logo.png" />
          </div>

          <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div class="instagram-mobile">
            <Imagen urlImagen="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            {icones.map((icone) => (<Icone nomeIcone={icone}/>))}
          </div>

          <div class="icones-mobile">
            <Icone nomeIcone="paper-plane-outline" />
          </div>
        </div>
    </div>
    )
}