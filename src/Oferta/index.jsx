import { useState } from "react";
import Cardapio from "../Componentes/listarProdutos";
export default function Oferta(){ 
    const [listaOferta, setOferta]  =  useState[
        {
            ID: 1,
            nome: "One Piece",
            preço: 29.90,
            cor: "Colorido",
            capitulo: 1075,
            imagem: " https://acdn.mitiendanube.com/stores/002/079/231/products/one-piece-3-em-1-vol-121-3e506cd7baddee239d16841849948500-1024-1024.jpg"
    
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
    
        },
        {
            ID: 6,
            nome: "Dragon Ball Z",
            preço: 30.00,
            cor: "Colorido",
            capitulo: 325,
            imagem: "https://images-americanas.b2w.io/produtos/5564286905/imagens/manga-u-dragon-ball-z-conrad-n-16/5564286905_1_large.jpg"
        },
        {
            ID: 7,
            nome: "Bleach",
            preço: 25.50,
            cor: "colorido",
            capitulo: 686,
            imagem: "https://mangalivre.com.br/wp-content/uploads/2023/10/Bleach-Sennen-Kessen-hen-3o-parte-YbZA48.webp"
        },
        {
            ID: 8,
            nome: "Fairy Tail",
            preço: 26.00,
            cor: "Colorido",
            capitulo: 545,
            imagem: "https://m.media-amazon.com/images/I/71LVD4PADdL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            ID: 9,
            nome: "Death Note",
            preço: 27.50,
            cor: "colorido",
            capitulo: 108,
            imagem: "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2013/06/dn-black-edition-01.jpg"
        },
        {
            ID: 10,
            nome: "Tokyo Ghoul",
            preço: 24.50,
            cor: "colorido",
            capitulo: 143,
            imagem: "https://imgs.extra.com.br/1508585138/1xg.jpg"
        }
    ];
    return(
        <div>
        <hi>Minha Oferta</hi>
        <Cardapio itens={listaOferta}/>
        </div>
    )
}