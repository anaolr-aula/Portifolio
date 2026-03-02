import pessoa from "./assets/pessoa.png"
import github from "./assets/github.png"
import linkedin from "./assets/linkdin.png"

function App() {
  

  return (
    <main>
      <section>
        <p>Olá! Seja bem-vindo(a) ao meu Portifólio</p>

        <p>Meu nome é <span>Ana Beatriz</span> e eu sou desenvolvedora web</p>

        <div id="redes-sociais">
          <a href="https://github.com/anaolr">
            <img src={github} alt="" srcSet=""/>
          </a>
          <a href="https://www.linkedin.com/in/anabeatriz-freitas/">
            <img src={linkedin} alt="" srcSet=""/>
          </a>

        </div>
        
          <a href="#sobreMim">
            <button>Conheça mais sobre mim</button>
          </a>
      </section>

      <section>
        <img id="imageDev" src={pessoa} alt="" />
      </section>
    </main>
  )
}

export default App
