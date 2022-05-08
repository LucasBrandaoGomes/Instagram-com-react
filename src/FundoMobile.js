import Icone from "./Icone"
const icones =["home", "search-outline","add-circle-outline", "heart-outline", "person-outline"]

export default function FundoMobile() {
    
    return (
    <div class="fundo-mobile">
        {icones.map((icone) => (<Icone nomeIcone={icone}/>))} 
    </div>
    )
}