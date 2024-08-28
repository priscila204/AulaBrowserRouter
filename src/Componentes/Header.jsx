import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/oferta">Ofertas</Link></li>
                <li><Link to="/prod">Produtos</Link></li>
            </ul>
        </nav>
    );
}
