import './App.css';
import { BrowserRouter as Rotas } from 'react-router-dom';
import RotasExistente from './components/Routes';

function App() {
  return (
    <Rotas>
        <RotasExistente></RotasExistente>
    </Rotas>
  );
}

export default App;
