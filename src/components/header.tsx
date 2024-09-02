import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav-logo">
                    MyApp
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;