import { Produtos } from "../model/Produtos";


export interface ProdutosRepository{
    
    cadastrar(produto: Produtos): void;
    listarProdutos(): void;
    procurarPorId(numero: number): void;
    atualizar(produto: Produtos): void;
    deletar(numero: number): void;
}