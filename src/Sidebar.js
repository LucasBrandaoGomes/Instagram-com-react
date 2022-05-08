const sugestaoUsuarios =
[
    {imgUsuario:"assets/img/bad.vibes.memes.svg" , user: "bad.vibes.memes", status:"Segue você" },
    {imgUsuario:"assets/img/chibirdart.svg" , user: "chibirdart", status:"Segue você"},
    {imgUsuario:"assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", status:"Segue você"},
    {imgUsuario:"assets/img/adorable_animals.svg" , user: "adorable_animals", status: "Novo no Instagram"},
    {imgUsuario:"assets/img/smallcutecats.svg", user: "smallcutecats", status:"Segue você"}
]

function SugestaoUsuario(props){
    return(
        <div class="sugestao">
              <div class="usuario">
                <img src={props.imgUsuario} />
                <div class="texto">
                  <div class="nome">{props.user}</div>
                  <div class="razao">{props.status}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>

    )
}
function Sugestoes(){
    return(
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
        {sugestaoUsuarios.map((usuario) => (<SugestaoUsuario imgUsuario={usuario.imgUsuario} user={usuario.user} status={usuario.status}/>))} 
        </div>
    )
}
function Usuario(props){
    return(
    <div class="usuario">
        <img src={props.urlUsuario} />
        <div class="texto">
        <strong>{props.user}catanacomics</strong>
        {props.userNick}
        </div>
    </div>
    )
}
export default function Sidebar(){
    return (
    <div class="sidebar">  
        <Usuario urlUsuario = "assets/img/catanacomics.svg" user="catanacomics" userNick="Catana" />
        <Sugestoes />
    </div>  
 )
}