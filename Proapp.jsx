import Navbar from './Navbar';
import Rodape from './Rodape';

import Gameficacao from './pages/Gameficacao';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Planos from './pages/Planos';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('perfil');

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    window.scrollTo(0, 0);
  };

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'gameficacao':
        return <Gameficacao onNavigate={navegarPara} />;
      case 'login':
        return <Login onNavigate={navegarPara} />;
      case 'planos':
        return <Planos onNavigate={navegarPara} />;
      case 'perfil':
      default:
        return <Perfil onNavigate={navegarPara} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar onNavigate={navegarPara} />
      
      <main style={{ flex: 1 }}>
        {renderizarPagina()}
      </main>

      <Rodape onNavigate={navegarPara} />
    </div>
  );
}