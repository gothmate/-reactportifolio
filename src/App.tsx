import Home from './pages/Home/index';
import Works from './pages/Works/index';
import Games from './pages/Games/index';
import Github from './pages/Github/index';
import Contatos from './pages/Contato/index';

export default function App() {
  return (
    <div className='main-page'>
      <Home />
      <Works />
      <Games />
      <Github />
      <Contatos />
    </div>
  )
}