import { Link } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoCliente from '../../comum/servicos/ServicoCliente';
import { useEffect, useState } from 'react';
import { FaFaceTired } from 'react-icon'
import './PaginaListaClientes.css';
import { ,useNavigate } from 'react-router-dom';

const instanciaServicoCliente = new ServicoCliente();

const PaginaListaClientes = () => {

  const[listaClientes,setListaClientes] = useState([]);
 
  
  useEffect(() => {
    const clientesDoLocalStorage = instanciaServicoCliente.listar();
    setListaClientes(clientesDoLocalStorage);
  }, []);
  
  const navegarParaEdicao = (idCliente) => {
      Navigate(`/cadastro-clientes/${idCliente}`)
  };
  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <Link to="/cadastro-cliente">Novo</Link>
      
      {listaClientes.map((cliente) => {
        return
        <div
        key={cliente.id}
        className="pagina-lista-clientes__item-cliente"
        >
          {cliente.nome}

          <FaFaceTired
          size={128}
          color='red'
          onClick={ () => navegarParaEdicao(cliente.id)}
          />
          </div>
      })}
      {/* <pre>
        {JSON.stringify(clientesDoLocalStorage, null, 2)}
      </pre> */}
    </Principal>
  );
};

export default PaginaListaClientes;