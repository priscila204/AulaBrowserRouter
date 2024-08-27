export default function Home(){ 
    const mangas = [
        {
            ID: 1,
            nome: "One Piece",
            preço: 29.90,
            cor: "Colorido",
            capitulo: 1075,
            imagem: "link_para_imagem_one_piece.jpg"
        },
        {
            ID: 2,
            nome: "Naruto",
            preço: 24.90,
            cor: "Preto e Branco",
            capitulo: 700,
            imagem: "link_para_imagem_naruto.jpg"
        },
        {
            ID: 3,
            nome: "Attack on Titan",
            preço: 27.90,
            cor: "Preto e Branco",
            capitulo: 139,
            imagem: "link_para_imagem_attack_on_titan.jpg"
        },
        {
            ID: 4,
            nome: "My Hero Academia",
            preço: 26.90,
            cor: "Preto e Branco",
            capitulo: 386,
            imagem: "link_para_imagem_my_hero_academia.jpg"
        },
        {
            ID: 5,
            nome: "Demon Slayer",
            preço: 28.90,
            cor: "Preto e Branco",
            capitulo: 205,
            imagem: "link_para_imagem_demon_slayer.jpg"
        }
    ];
      const [listaProdutos, setPtrodutos] = useState([
        { id: 1, nome: 'Produto A', preco: '55.00'},
        { id: 2, nome: 'Produto B', preco: '40.00'},
        { id: 3, nome: 'Produto C', preco: '85.00'},
        { id: 4, nome: 'Produto D', preco: '59.90'},
        { id: 5, nome: 'Produto E', preco: '75.00'},
        { id: 6, nome: 'Produto F', preco: '29.99'},
        { id: 7, nome: 'Produto G', preco: '29.99'},
        { id: 9, nome: 'Produto H', preco: '55.00'},
        { id: 10, nome: 'Produto I', preco: '55.00'},
    
        ]);
    
    return(
        
        <div>
        <header/>
        <h1>Minha Home</h1>
        </div>
    );
}
