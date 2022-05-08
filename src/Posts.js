// PARTE DOS POSTS

import Imagen from "./Imagen"
import Icone from "./Icone"
const iconesAcoes = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]
const posts =
[
    {imgTopo: "assets/img/meowed.svg"  , textoTopo: "meowed" , imgConteudo: "assets/img/gato-telefone.svg", imgCurtidas:"assets/img/respondeai.svg", quemCurtiu:"respondeai" ,  maisCurtidas:"outras 101.523 pessoas"},
    {imgTopo: "assets/img/barked.svg"  , textoTopo: "barked" , imgConteudo: "assets/img/dog.svg", imgCurtidas:"assets/img/adorable_animals.svg", quemCurtiu:"adorable_animals" ,  maisCurtidas:"outras 99.159 pessoas"}
]
function PostIten(props){
    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <Imagen urlImagen={props.imgTopo}/>
                  {props.textoTopo}
                </div>
                <div class="acoes">
                  <Icone nomeIcone="ellipsis-horizontal"/>
                </div>
              </div>

              <div class="conteudo">
                <Imagen urlImagen={props.imgConteudo} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    {iconesAcoes.map((icone) => (<Icone nomeIcone={icone}/>))}
                  </div>
                  <div>
                    <Icone nomeIcone="bookmark-outline" />
                  </div>
                </div>

                <div class="curtidas">
                  <Imagen urlImagen={props.imgCurtidas}/>
                  <div class="texto">
                    Curtido por <strong>{props.quemCurtiu}</strong> e <strong>{props.maisCurtidas}</strong>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default function Posts(){
    return(
    <div class="posts">
        {posts.map((post) => (<PostIten imgTopo={post.imgTopo} textoTopo={post.textoTopo} imgConteudo={post.imgConteudo} imgCurtidas={post.imgCurtidas} quemCurtiu={post.quemCurtiu} maisCurtidas={post.maisCurtidas} />))}
    </div>
    )
}

