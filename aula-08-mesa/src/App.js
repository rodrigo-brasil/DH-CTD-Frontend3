/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.scss';
import data from './data';
import Lista from './components/Lista';

function App() {


  return (
    <>
     <Lista listaItens={data} />
    </>
  );
}

export default App;
