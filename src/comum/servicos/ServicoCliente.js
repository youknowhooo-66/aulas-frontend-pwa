class ServicoCliente {

    listar() {
        const clientesDoLocalStorage = localStorage.getItem('clientes')
        if(clientesDoLocalStorage){
            return JSON.parse(clientesDoLocalStorage);
        }

        return [];

    }

    salvar(clienteParaSalvar) {
        const clientesDoLocalStorage = this.listar();
        clientesDoLocalStorage.push(cliente);
        localStorage.setItem(
            'clientes',
            JSON.stringify(clientesDoLocalStorage)
        );

    }
}
export default ServicoCliente;