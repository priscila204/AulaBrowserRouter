import { useState } from 'react';

export default function Cardapio({ itens }) {
    const [listaProdutos, setProdutos] = useState(itens);

    const [listaPedidos, setListaPedidos] = useState([]);

    const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos, objeto]);
    }

    const removerPedido = (id) => {
        let remover = false;
        const listaAux = listaPedidos.filter((produto) => {
            if (!remover && produto.id === id) {
                remover = true;
                return false;
            } else {
                return true;
            }
        });
        setListaPedidos(listaAux);
    }

    return (
        <div>
            <div>
                {listaProdutos.map((item) => (
                    <div key={item.id}>
                        <img src={item.imagem}></img>
                        {item.nome} - R$ {item.preco}
                        <button onClick={() => adicionarItemPedidos(item)}>Adicionar ao Pedido</button>
                    </div>
                ))}
            </div>
            <div>
                {listaPedidos.map((produto) => (
                    <div key={produto.id}>
                        <p>{produto.nome}</p>
                        <p>R$ {produto.preco}</p>
                        <button onClick={() => removerPedido(produto.id)}>Remover</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
