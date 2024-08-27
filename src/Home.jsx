
import { useState } from "react";
import Cardapio from "./listarProdutos";
export default function Home(){ 
    const [listaMangas, setMangas]  =  useState [
        {
            ID: 1,
            nome: "One Piece",
            preço: 29.90,
            cor: "Colorido",
            capitulo: 1075,
            imagem: "https://acdn.mitiendanube.com/stores/002/079/231/products/one-piece-3-em-1-vol-121-3e506cd7baddee239d16841849948500-1024-1024.jpg"
        },
        {
            ID: 2,
            nome: "Naruto",
            preço: 24.90,
            cor: "colorido",
            capitulo: 700,
            imagem: "https://m.media-amazon.com/images/I/91RpwagB7uL._AC_UF894,1000_QL80_.jpg"
        },
        {
            ID: 3,
            nome: "Attack on Titan",
            preço: 27.90,
            cor: "colorido",
            capitulo: 139,
            imagem: "https://mangalivre.com.br/wp-content/uploads/2021/11/Attack-on-Titan-4-GQCA-img-qSKtAl-847x1200.jpeg"
        },
        {
            ID: 4,
            nome: "My Hero Academia",
            preço: 26.90,
            cor: "colorido",
            capitulo: 386,
            imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Feditorajbc.com.br%2Fmangas%2Fcolecao%2Fmy-hero-academia%2F&psig=AOvVaw1MRkwGQxQzBpSziMR88xf1&ust=1724806066729000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjy8735k4gDFQAAAAAdAAAAABAE"
        },
        {
            ID: 5,
            nome: "Demon Slayer",
            preço: 28.90,
            cor: "colorido",
            capitulo: 205,
            imagem: "https://mangalivre.com.br/wp-content/uploads/2021/02/kimetsu-no-yaiba-segunda-temporada-poster-768x1086-2.jpg"
        }
    ];
      const [listaProdutos, setPtrodutos] = useState([
        { id: 1, nome: 'manga', preco: '55.00'},
        { id: 2, nome: 'manga', preco: '40.00'},
        { id: 3, nome: 'manga', preco: '85.00'},
        { id: 4, nome: 'manga', preco: '59.90'},
        { id: 5, nome: 'manga', preco: '75.00'},
        { id: 6, nome: 'manga', preco: '29.99'},
        { id: 7, nome: 'manga', preco: '29.99'},
        { id: 9, nome: 'manag', preco: '24.90'},
        { id: 10, nome: 'manga', preco: '50.00'},
    
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
