
import Botao from "../Botao/Botao";
import Cards from "../Cards/Cards";
import Summary from "../Summary/Summary";
export default function ConteudoSecundario() {
    return (
        <div className="flex-1 bg-corTexto-branco rounded-r-3xl border-0">
            <Summary/>
            <Cards />
            <Botao/>
        </div>
    )
}