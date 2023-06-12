import Card from "../Card/Card.jsx";
import cards from "./card.json";

export default function Cards(){
    return (
        <ul>
            {cards.map((card) => (
                <Card key={card.id} nome={card.nome} imagem={card.icone} background={card.background} text={card.text} conteudo={card.conteudo} />
            ))}
        </ul>
    )
}