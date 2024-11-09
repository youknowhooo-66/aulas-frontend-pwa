import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoCliente from '../../comum/servicos/ServicoCliente';
<<<<<<< HEAD
import './PaginaListaClientes.css';

=======
import { useEffect, useState } from 'react';
import { FaFaceTired } from 'react-icon'
import './PaginaListaClientes.css';
import { ,useNavigate } from 'react-router-dom';
>>>>>>> bb298ca6b239d2db2ca837efdbd86ad4063b6b87

const instanciaServicoCliente = new ServicoCliente();

const PaginaListaClientes = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    
  const clientesDoLocalStorage = 
      instanciaServicoCliente.listar();
    setListaClientes(clientesDoLocalStorage);
  }, []);
  
  const excluir = (idCliente) => {
    if (confirm('Tem certeza?')){
      instanciaServicoCliente.excluirCliente(idCliente)
    }
  };
  
  const navegarParaEdicao = (idCliente) => {
    navigate(`/cadastro-cliente/${idCliente}`);
  };

=======

  const[listaClientes,setListaClientes] = useState([]);
 
  
  useEffect(() => {
    const clientesDoLocalStorage = instanciaServicoCliente.listar();
    setListaClientes(clientesDoLocalStorage);
  }, []);
  
  const navegarParaEdicao = (idCliente) => {
      Navigate(`/cadastro-clientes/${idCliente}`)
  };
>>>>>>> bb298ca6b239d2db2ca837efdbd86ad4063b6b87
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

<<<<<<< HEAD
      {listaClientes.map((cliente) => {
        return (
          <div
            key={cliente.id}
            className="pagina-lista-clientes__item-cliente"
          >
            {cliente.nome}

            <div className='pagina-lista-clientes__item-cliente-acoes' > 
            <FaEdit
              size={24}
              onClick={() => navegarParaEdicao(cliente.id)} />

            <FaTrash
            size={24}
            color='red'
            onClick={() => excluir(cliente.id)}/>
   
            </div>
          </div>
        );
      })}
      <Link to="/">Voltar para a Página Inicial</Link>
=======
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
>>>>>>> bb298ca6b239d2db2ca837efdbd86ad4063b6b87
    </Principal>
  );
};

export default PaginaListaClientes;