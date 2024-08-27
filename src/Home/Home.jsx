import { useState } from 'react';
import Cardapio from '../Componentes/listarProdutos';

export default function Home() { 

    const [listaMangas, setMangas] = useState([
        {
            id: 1,
            nome: "One Piece",
            preco: 29.90,
            cor: "Colorido",
            capitulo: 1075,
            imagem: "https://acdn.mitiendanube.com/stores/002/079/231/products/one-piece-3-em-1-vol-121-3e506cd7baddee239d16841849948500-1024-1024.jpg"
        },
        {
            id: 2,
            nome: "Naruto",
            preco: 24.90,
            cor: "colorido",
            capitulo: 700,
            imagem: "https://m.media-amazon.com/images/I/91RpwagB7uL._AC_UF894,1000_QL80_.jpg"
        },
        {
            id: 3,
            nome: "Attack on Titan",
            preco: 27.90,
            cor: "colorido",
            capitulo: 139,
            imagem: "https://mangalivre.com.br/wp-content/uploads/2021/11/Attack-on-Titan-4-GQCA-img-qSKtAl-847x1200.jpeg"
        },
        {
            id: 4,
            nome: "My Hero Academia",
            preco: 26.90,
            cor: "colorido",
            capitulo: 386,
            imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Feditorajbc.com.br%2Fmangas%2Fcolecao%2Fmy-hero-academia%2F&psig=AOvVaw1MRkwGQxQzBpSziMR88xf1&ust=1724806066729000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjy8735k4gDFQAAAAAdAAAAABAE"
        },
        {
            id: 5,
            nome: "Demon Slayer",
            preco: 28.90,
            cor: "colorido",
            capitulo: 205,
            imagem: "https://mangalivre.com.br/wp-content/uploads/2021/02/kimetsu-no-yaiba-segunda-temporada-poster-768x1086-2.jpg"
        }
    ]);

    return (
        <div>
            
            <h1>Minha Loja Virtual</h1>
            <Cardapio itens={listaMangas} />
        </div>
    );
}
