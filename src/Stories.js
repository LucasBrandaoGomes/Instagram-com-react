
const listaSotories = 
[
  {url:"assets/img/9gag.svg", texto: "9gag"},
  {url:"assets/img/meowed.svg", texto: "meowed"},
  {url:"assets/img/barked.svg", texto: "barked"},
  {url:"assets/img/nathanwpylestrangeplanet.svg", texto: "nathanwpylestrangeplanet"},
  {url:"assets/img/wawawicomics.svg", texto: "wawawicomics"},
  {url:"assets/img/respondeai.svg", texto: "respondeai"},
  {url:"assets/img/filomoderna.svg", texto: "filomoderna"},
  {url:"assets/img/memeriagourmet.svg", texto: "memeriagourmet"}
    
]

//PARTE DOS STORIES


function Setinha (){
  return(
  <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
  </div>
  )
}

function StoriesItens(props){
  return(
    <div class="story">
      <div class="imagem">
        <img src={props.urlSorie} />
      </div>
      <div class="usuario">
        {props.textoUsuario}
      </div>
    </div>
  )
  }

export default function Stories(){
    return (
      <div class="stories">
        {listaSotories.map((storie) => (<StoriesItens urlSorie={storie.url} textoUsuario={storie.texto}/>))}
        <Setinha />
      </div>
    )
}