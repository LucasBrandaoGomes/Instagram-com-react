// PARTE DOS POSTS
import React from "react";
import Imagen from "./Imagen"
import Icone from "./Icone"
const posts =
[
    {imgTopo: "assets/img/meowed.svg"  , textoTopo: "meowed" , imgConteudo: "assets/img/gato-telefone.svg", imgCurtidas:"assets/img/respondeai.svg", quemCurtiu:"respondeai" ,  maisCurtidas:"outras 101.523 pessoas"},
    {imgTopo: "assets/img/barked.svg"  , textoTopo: "barked" , imgConteudo: "assets/img/dog.svg", imgCurtidas:"assets/img/adorable_animals.svg", quemCurtiu:"adorable_animals" ,  maisCurtidas:"outras 99.159 pessoas"}
]
function PostIten(props){
  const [name, setName] = React.useState("heart-outline");
  
  function Curtida(click){
    
    if (click === "click"){
    setName("heart")
    }
  }

  function Descurtida(click){
    if (click === "click"){
      setName("heart-outline")
    }
  }
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

              <div class="conteudo" onClick={() => Curtida("click")}>
                <Imagen urlImagen={props.imgConteudo} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name={name} onClick={() => Descurtida("click")}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon> 
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

