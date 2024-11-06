import './PaginaListaProdutos.css';
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ServicoProduto from '../../comum/servicos/ServicoProduto';

const PaginaListaProdutos = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tarefas, setTarefas] = useState([]);

// const salvar = () => {
//     const novoCliente = {nome, preco};

//     ServicoProduto.salvar(novoProduto);
//     navigate('/cadastro-produtos');
// }; 
const salvar = () => {
    setTarefas([...tarefas, descricao]);
    setDescricao('');
};
return (
<Principal
titulo='Lista de Produtos'
>
<div className="campo">
<label>Nome</label>
<input type="text" placeholder="Nome do produto" value={nome} onChange={(e) => setNome(e.target.value)} />
</div>

<div className="campo">
<label>Preco</label>
<input
type="tel"
placeholder="Preço do produto" value={preco} onChange={(e) => setPreco(e.target.value)}
/>
</div>
<div className='botao'>
<BotaoCustomizado cor='secundaria' aoClicar={salvar}>
Adicionar
</BotaoCustomizado>
</div>
    <ul>
        {tarefas.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </ul>
</Principal>
)
}

export default PaginaListaProdutos