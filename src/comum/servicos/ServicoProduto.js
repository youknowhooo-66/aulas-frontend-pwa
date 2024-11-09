class ServicoProduto {

    listar() {
        const produtosDoLocalStorage = localStorage.getItem('produtos')
        if(produtosDoLocalStorage){
            return JSON.parse(produtosDoLocalStorage);
        }

        return [];

    }

    salvar(produtosParaSalvar) {
        const produtosDoLocalStorage = this.listar();
        produtosDoLocalStorage.push(produtos);
        localStorage.setItem(
            'produtos',
            JSON.stringify(produtosDoLocalStorage)
        );

    }
}
export default ServicoProduto;