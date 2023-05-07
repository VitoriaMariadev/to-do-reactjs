import './App.css';
import { BrowserRouter as Rotas } from 'react-router-dom';
import RotasExistente from './components/Routes';

function App() {
  return (
    <Rotas>
        <RotasExistente>Teste</RotasExistente>
    </Rotas>
  );
}

export default App;
