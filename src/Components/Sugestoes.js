import Perfil from '../imagens/Perfil.png';
import Sugestao1 from '../imagens/sugestao1.png';
import Sugestao2 from '../imagens/sugestao2.png';
import Sugestao3 from '../imagens/sugestao3.png';
import Sugestao4 from '../imagens/sugestao4.png';
import Sugestao5 from '../imagens/sugestao5.png';

import './Sugestoes.Module.css';

function Sugestao (){
    return(
    <div className="fubdo">
<div className="FundoPerfil">
                <div className="PerfilMudar">
                <div className="fundoPerfil">
                    <div className="Perfil">
                        <img src={Perfil}></img></div>
                        <div className="alinhar1">
                        <div className="user_perfil">
                            <h5>anabeatrizlm_</h5>
                            <p>Ana Beatriz</p>
                        </div>
                        <div className="mudar"><a href="#"><p>Mudar</p></a></div>
                        </div>
                    </div>
                    <div className="textoSug">
                        <p className="p1">Sugestões para ti</p>
                        <a href="#"><p className="p2"> Ver todas</p></a>
                    </div>
                <div className="sugestoes">
                    <div className="alinhar2">
                    <div className="sug1">
                        <img src={Sugestao1} />
                    </div>
                    <div className="textoSug2">
                        <h5>nick_098</h5>
                        <a href="#"><p className="Seguir">Seguir</p></a>
                    </div>
                    </div>
                    <div className="alinhar2">
                    <div className="sug1">
                        <img src={Sugestao2} />
                    </div>
                    <div className="textoSug2">
                        <h5>nicolesy_</h5>
                        <a href="#"><p className="Seguir">Seguir</p></a>
                    </div>
                    </div>
                    <div className="alinhar2">
                    <div className="sug1">
                        <img src={Sugestao3} />
                    </div>
                    <div className="textoSug2">
                        <h5>gui.tdeu</h5>
                        <a href="#"><p className="Seguir">Seguir</p></a>
                    </div>
                    </div>
                    <div className="alinhar2">
                    <div className="sug1">
                        <img src={Sugestao4} />
                    </div>
                    <div className="textoSug2">
                        <h5>jul_silv</h5>
                        <a href="#"><p className="Seguir">Seguir</p></a>
                    </div>
                    </div>
                    <div className="alinhar2">
                    <div className="sug1">
                        <img src={Sugestao5} />
                    </div>
                    <div className="textoSug2">
                        <h5>art.nat_</h5>
                        <a href="#"><p className="Seguir">Seguir</p></a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default Sugestao