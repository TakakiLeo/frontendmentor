import Circulo from "../Circulo/Circulo";

export default function Conteudo() {
    return (
        <div className="flex-1 bg-gradient-to-b from-gradient-roxoClaro to-gradient-roxoEscuro rounded-3xl">
            <h3 className="font-hanken font-semibold text-xl text-corTexto-roxo py-10">
                Your Result
            </h3>
            <Circulo/>
            <h1 className="font-hanken text-3xl font-bold text-corTexto-branco pt-7">
                Great
            </h1>
            <p className="text-corTexto-roxo font-hanken text-base px-14 pt-4 pb-12">
                You scored higher than 65% of the people who have taken these tests.
            </p>
        </div>
    )
}