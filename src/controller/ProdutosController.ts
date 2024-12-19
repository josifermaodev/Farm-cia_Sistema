import { ProdutosRepository } from "../repository/ProdutosRepository";
import { Produtos } from "../model/Produtos";


export class ProdutosController implements ProdutosRepository {
    
    //Coleção Array que vai armazenar os objetos produtos cadastrados
    private listaProdutos = new Array<Produtos>();

    //Controla o id dos produtos
    public id: number = 0;


    
    cadastrar(produto: Produtos): void {
        this.listaProdutos.push(produto);
        console.log("O produto foi cadastrado com sucesso!");
    }


    listarProdutos(): void {
        for (let produtos of this.listaProdutos){
            produtos.visualizar();
        }
    }


    procurarPorId(id: number): void {
        const buscaId = this.buscarNoArray(id);

        if (buscaId){
            console.log("Produto encontrado:");
            buscaId.visualizar();
        } else {
            console.log("Nenhum produto encontrado com esse ID.");
        }
    }


    atualizar(produto: Produtos): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("O produto foi atualizado com sucesso!");
        } else {
            console.log("\nProduto nao encontrada!")
        }
    }


    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("O produto foi deletado com sucesso!");
        } else {
            console.log("\nProduto nao encontrado!")
        }
    }


    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produtos | null {
        for (let produtos of this.listaProdutos){
            if (produtos.id === id){
                return produtos;
            }
        }
        return null;
    }

}