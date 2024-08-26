import { useState } from "react";

export default function Cardapio() {
    const [listaProdutos, setPtrodutos] = useState([
    { id: 1, nome: 'Produto A', preco: '55.00'},
    { id: 2, nome: 'Produto B', preco: '40.00'},
    { id: 3, nome: 'Produto C', preco: '85.00'},
    { id: 4, nome: 'Produto D', preco: '59.90'},
    { id: 5, nome: 'Produto E', preco: '75.00'},
    { id: 6, nome: 'Produto F', preco: '29.99'},
    { id: 7, nome: 'Produto G', preco: '55.00'},
    { id: 9, nome: 'Produto H', preco: '55.00'},
    { id: 10, nome: 'Produto I', preco: '55.00'},

    ]);

const [listaPedidos, setListaPedidos] = useState([]);
const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
}

const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter ((produto)=> {
       if (remover == false){
         if (produto.id !== id) {
            return produto
         } else {
            remover =  true;
            return null 
         }
       } else {
            return produto
       }
});
setListaPedidos(listaAux);
}

return (
    <div>
        <h1>Minha Loja Virtual</h1>
        <div>
            {listaProdutos.map((item) => (
                <div key={item.id}>
                    {item.nome} - R$ {item.preco}
                    <button onClick={() => adicionarItemPedidos(item)}>Adicionar ao Pedido</button>
                </div>
            ))}
        </div>
        {
            listaPedidos.map ((produto)=> 
            <div key={produto.id}>
                <p>{produto.nome}</p>
                 <p> {produto.preco}</p>
                 <button onClick={()=> removerPedido(produto.id)}>Remover </button>
            </div>
            )
}
        
        </div>
    )
}