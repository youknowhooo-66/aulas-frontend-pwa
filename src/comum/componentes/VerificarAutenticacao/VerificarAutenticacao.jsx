import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ServicoAutentificacao from "../../servicos/ServicoAutentificacao";

const instaciaServicoAutentificaco = new ServicoAutentificacao()

const VerificarAutentificacao = () => {
    const usuarioEstaLogado = instaciaServicoAutentificaco.usuarioEstaLogado();

    useEffect(() => {



    },[]);

    return usuarioEstaLogado ? <Outlet /> : null;
};

export default VerificarAutentificacao;