const icones = ["paper-plane-outline","compass-outline", "heart-outline", "person-outline"]

function Imagen(props) {
    return (
        <img src={props.urlImagen} />
    
    );
  }
function Icone(props){
    return (
        <ion-icon name={props.nomeIcone}></ion-icon>
    )
}
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