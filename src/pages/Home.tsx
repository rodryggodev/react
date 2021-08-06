import illustrationImg from '../assets/imagens/illustration.svg';
import logoImg from '../assets/imagens/logo.svg';
import googleIconImg from '../assets/imagens/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.css';

export function Home() {
    return (
      <div id="page-auth"> 
        <aside>
          <img src={illustrationImg} alt="ilustração simbolisando pertuntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo real</p>
        </aside>

        <main>
          <div className="main-content">
            <img src={logoImg} alt="logo" />
            <button className="create-room">
              <img src={googleIconImg} alt="icone para entrar com conta google" />
              Crie sua sala com o Goole
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form>
              <input
                type="text"
                placeholder="Digite o codigo da sala"
              />
              <Button type="submit">
                Entrar na sala 
              </Button> 
            </form>
          </div>
        </main>
      </div>
    );
}
