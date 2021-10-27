import Class from './ClassComponent';
import Func from './FunctionComponent';
import './App.css';

function App() {

  const convidados = [
    {
      nome: 'Nicolas',
      presenca: true,
      tarefa: "batata-frita"
    },
    {
      nome: 'Pedro',
      presenca: false,
      tarefa: "pizza"
    },
    {
      nome: 'Carolina',
      presenca: true,
      tarefa: "bebidas"
    }
  ];

  return (
    <div className="App">
      <h3>Convidados:</h3>
       <Class convidados={convidados} /> 
      <h3>Tarefa: </h3>
      <Func convidados={convidados} />
    </div>
  );
}

export default App;
