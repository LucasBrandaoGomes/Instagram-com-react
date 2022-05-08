const icones =["home", "search-outline","add-circle-outline", "heart-outline", "person-outline"]

function Icone(props){
    return (
        <ion-icon name={props.nomeIcone}></ion-icon>
    )
}

export default function FundoMobile() {
    
    return (
    <div class="fundo-mobile">
        {icones.map((icone) => (<Icone nomeIcone={icone}/>))} 
    </div>
    )
}