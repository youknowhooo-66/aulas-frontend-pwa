import { Link } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';

const PaginaListaClientes = () => {
    const servicoCliente = new ServicoCliente();
    const clienteDoLocalStorage = servicoCliente.listar();
  
    return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <Link to="/cadastro-cliente">Novo</Link>

        <pre>
            {JSON.stringify(clienteDoLocalStorage, null, 2)}
        </pre>

    </Principal>
  );
};

export default PaginaListaClientes;