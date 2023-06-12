import "./App.css";

import Conteudo from "./components/Conteudo/Conteudo";
import ConteudoSecundario from "./components/ConteudoSecundario/ConteudoSecundario";



function App() {
  return (
    <main className="bg-primary-branco">
      <section className="flex items-center justify-center sm:h-screen">
        <div className="flex lg:w-1/2 text-center max-w-2xl rounded-3xl drop-shadow-2xl bg-corTexto-branco md:flex-row sm:flex flex-col">
          <Conteudo />
          <ConteudoSecundario/>
        </div>
      </section>
    </main>
  );
}

export default App;
