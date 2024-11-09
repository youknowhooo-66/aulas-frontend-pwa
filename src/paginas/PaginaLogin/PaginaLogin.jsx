import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoAutentificacao from "../../comum/servicos/ServicoAutentificacao";

const instanciaServicoAutentificacao = new ServicoAutentificacao();

const PaginaLogin = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastrar = () => {
    if(!email || !senha){
        toast.error('Preencha todos os campos.');
        return;
    };

    const usuarioLogado =  instanciaServicoAutentificacao.login(email, senha);
    if (usuarioLogado) {
    navigate('/');
    } else {
        toast.error('Usuário ou senha inválida.')
    }

}

    return <Principal titulo='Entrar'>
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
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <BotaoCustomizado
      cor='secundaria'
      aoClicar={cadastrar}
      >Entrar</BotaoCustomizado>

    </Principal>
}

export default PaginaLogin;