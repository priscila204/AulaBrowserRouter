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
        <div className="container">
            <div className="product-list">
                {listaProdutos.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.imagem} className="product-image" alt={item.nome} />
                        <div className="product-info">
                            <p>{item.nome} - R$ {item.preco}</p>
                            <button onClick={() => adicionarItemPedidos(item)} className="add-button">Adicionar ao Pedido</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="order-list">
                {listaPedidos.map((produto) => (
                    <div key={produto.id} className="order-card">
                        <p>{produto.nome}</p>
                        <p>R$ {produto.preco}</p>
                        <button onClick={() => removerPedido(produto.id)} className="remove-button">Remover</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

