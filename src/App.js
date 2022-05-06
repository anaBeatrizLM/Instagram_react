import './App.css';

import Header from './Components/Header';
import Carrossel from './Components/Carrossel';
import Conteudo from './Components/Conteudo';
import Sugestao from './Components/Sugestoes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hr"></div>
      <Carrossel />
      <section className='Sugestao'>
      <Sugestao />
      </section>
      <Conteudo />
     
      </div>

  );
}

export default App;
