
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
                <ul className="footer-links">
                    <li>
                        <Link to="/privacy" className="footer-link">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/terms" className="footer-link">
                            Terms of Service
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="footer-link">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
