import illustrationImg from '../assets/imagens/illustration.svg';
import logoImg from '../assets/imagens/logo.svg';
import googleIconImg from '../assets/imagens/google-icon.svg';
export function Home() {
    return (
      <div> 
        <aside>
          <img src={illustrationImg} alt="ilustração simbolisando pertuntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo real</p>
        </aside>

        <main>
          <div>
            <img src={logoImg} alt="logo" />
            <button>
              <img src={googleIconImg} alt="icone para entrar com conta google" />
              Crie sua sala com o Goole
            </button>
            <div>ou entre em uma sala</div>
            <form>
              <input
                type="text"
                placeholder="Digite o codigo da sala"
              />
              <button type="submit">
                Entrar na sala 
              </button> 
            </form>
          </div>
        </main>
      </div>
    );
}
