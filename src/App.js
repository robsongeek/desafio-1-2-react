import Texto from './components/texto/texto';
import Button from './components/button/button';
import './App.css';

function App() {
  return (
    // sem esta div dá erro de compilação
    <>
      <Button label="Baixar CV"/>
      <Texto />
      
    </>
  );
}

export default App;
