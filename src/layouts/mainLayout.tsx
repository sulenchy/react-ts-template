
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

const MainLayout: React.FC = () => {
    return (
        <div className="main-layout">
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;