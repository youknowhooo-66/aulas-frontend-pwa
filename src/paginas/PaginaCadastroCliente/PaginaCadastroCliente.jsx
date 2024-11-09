<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoCliente from '../../comum/servicos/ServicoCliente';
import {
  formatarComMascara,
  MASCARA_CELULAR,
  MASCARA_CPF,
} from '../../comum/utils/mascaras';
import './PaginaCadastroCliente.css';

import { toast } from 'react-toastify';

const instanciaServicoCliente = new ServicoCliente();
=======
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoCliente from '../../comum/servicos/ServicoCliente';
import './PaginaCadastroCliente.css';
import { formatarComMascara,
         MASCARA_CELULAR,
         MASCARA_CPF,
 } from '../../comum/utils/mascaras';
>>>>>>> bb298ca6b239d2db2ca837efdbd86ad4063b6b87


const PaginaCadastroCliente = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const params = useParams();
=======
>>>>>>> bb298ca6b239d2db2ca837efdbd86ad4063b6b87

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');

<<<<<<< HEAD
  useEffect(() => {
    if (params.id) {
      const clienteEncontrado =
        instanciaServicoCliente.buscarPorId(params.id);
      if (clienteEncontrado) {
        setNome(clienteEncontrado.nome);
        setEmail(clienteEncontrado.email);
        setCelular(clienteEncontrado.celular);
        setDataNascimento(clienteEncontrado.dataNascimento);
        setCpf(clienteEncontrado.cpf);
      }
    }
  }, [params.id]);

  const salvar = () => {
    
    if(!nome || !email){
      toast.error("Preencha todos os campos obrigatórios!");
      return;
    }

    const cliente = {
      id: params.id ? +params.id : Date.now(),
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };
    if (params.id) {
      instanciaServicoCliente.editarCliente(cliente);
    } else {
      instanciaServicoCliente.cadastrarCliente(cliente);
    }
    navigate('/lista-clientes');
  };

  return (
    <Principal
      titulo={params.id ? 'Editar Cliente' : 'Novo Cliente'}
      voltarPara="/lista-clientes"
    >
      {params.id && (
        <div className="campo">
          <label>Id</label>
          <input type="text" value={params.id} disabled />
        </div>
      )}

      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite o número do seu Whatsapp"
          value={celular}
          onChange={(e) =>
            setCelular(
              formatarComMascara(
                e.target.value,
                MASCARA_CELULAR
              )
            )
          }
        />
      </div>

      <div className="campo">
=======
  const servicoCliente = new ServicoCliente();

  const salvar = () => {
    const novoCliente = {
      id: Date.now(),
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };
    servicoCliente.salvar(novoCliente);
    navigate('/lista-clientes');
  };

  return (
    <Principal
      titulo="Novo Cliente"
      voltarPara="/lista-clientes"
    >
      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='campo'>
        <label>Celular</label>
        <input
         type='tel'
         placeholder='Digite seu celular' value={celular} onChange={(e) => setCelular(
         formatarComMascara(e.target.value,
            MASCARA_CELULAR
            )
        )
    }
    />
</div>

<div className="campo">
>>>>>>> bb298ca6b239d2db2ca837efdbd86ad4063b6b87
        <label>Data Nascimento</label>
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
          value={dataNascimento}
          onChange={(e) =>
            setDataNascimento(e.target.value)
          }
        />
      </div>

<<<<<<< HEAD
      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) =>
            setCpf(
              formatarComMascara(
                e.target.value,
                MASCARA_CPF
              )
            )
          }
        />
      </div>
=======
<div className='campo'>
    <label>CPF</label>
    <input
    type='tel'
    placeholder='Digite seu CPF:' value={cpf} onChange={(e) => setCpf(
                formatarComMascara(e.target.value,
                MASCARA_CPF
            )
        )
    }
    />
  </div>
>>>>>>> bb298ca6b239d2db2ca837efdbd86ad4063b6b87
      <BotaoCustomizado cor="secundaria" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroCliente;98