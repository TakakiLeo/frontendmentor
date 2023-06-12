export default function Card({ key, imagem, nome, background, text, conteudo}) {

  return (
    <li key={key}>
      <div className={"flex px-5 justify-between  mx-5 py-4 rounded-xl my-4"} style={{backgroundColor:background}}>
        <div className="flex">
          <img className="pr-2" src={imagem} alt={nome} />
          <h3 className={"font-medium"} style={{color:text}}>{nome}</h3>
        </div>
        <h3 className="font-medium"> {conteudo} <span className="font-medium text-corTexto-pretoClaro"> / 100</span></h3>
      </div>
    </li>
  )
}
